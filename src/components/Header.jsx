import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { firebase, provider } from './firebase';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails} from '../features/users/userSlice'


const Header = (props) => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history("/home")
            }
        })
    }, [userName]);


    const handleAuth = () => {
        if(!userName){
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
                console.log(result);
            })
            .catch((error) => {
                alert(error);
            })
    } else if(userName){
        firebase.auth().signOut().then(() => {
            dispatch(setSignOutState());
            history("/");
        })
        .catch((err) => alert(err.message))
    }
}

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="images/Artboard1.png" alt="DisneyPlus" />
            </Logo>

            {
                !userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                    <>

                        <NavMenu>
                            <a href="/home">
                                <img src="images/home-icon.svg" alt="Home" />
                                <span>HOME</span>
                            </a>
                            <a href="/home">
                                <img src="images/search-icon.svg" alt="Search" />
                                <span>SERACH</span>
                            </a>
                            <a href="/home">
                                <img src="images/watchlist-icon.svg" alt="Contact" />
                                <span>Contact</span>
                            </a>
                            <a href="/home">
                                <img src="images/original-icon.svg" alt="About" />
                                <span>About</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                )}
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 75px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0 ;
    width: 90px;
    margin-top: 4px;
    max-height: 75px;
    font-size: 0;
  img{
      display: block;
      width: 100%;
  }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right:auto ;
    margin-left: 25px;


 a{
     display: flex;
     align-items: center;
     padding: 0 12px;


     img{
         height: 20px;
         min-width: 20px;
         width: 20px;
         z-index: auto;
     }

     span{
         color: rgb(249, 249, 249);
         font-size: 13px;
         letter-spacing: 1.42px;
         line-height: 1.08;
         padding: 2px 0;
         white-space: nowrap;
         position: relative;

     &:before{
         background-color: rgb(249, 249, 249);
         border-radius: 0 0 4px 4px;
         bottom: -6px;
         content: "";
         height: 2px;
         left: 0; 
         opacity: 0;
         position: absolute;
         right: 0px;
         transform-origin: left center;
         transform: scaleX(0);
         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
         visibility: hidden;
         width: auto;
     }
 }

    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
 }  

 /* @media (max-width: 768px){
     display: none;
 } */
`;


const Login = styled.a`
    background-color: rgb(0, 0, 0, 0.6) ;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius : 4px;
    transition: all 0.2s ease 0s;

  &:hover{
      color: #000;
      background-color: #f9f9f9;
      border-color: transparent;
  }
`;

const UserImg = styled.img`
  height : 100% ;
`;

const DropDown = styled.div`
  position  : absolute;
  top: 52px;
  right: 0;
  font-size: 14px;
  white-space: nowrap;
  background-color: rgb(19,19,19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;  
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;
