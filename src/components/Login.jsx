import React from 'react'
import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/Artboard1.png" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>It's a piece of cake</Description>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
  height: 100vh;
  background-image: url("/images/bg1.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity:0.5
  
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  margin-left:140px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 50%;
  opacity:0.5;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  margin-bottom: 12px;
  text-align: center;

  &:hover{
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 20px;  
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;

export default Login






