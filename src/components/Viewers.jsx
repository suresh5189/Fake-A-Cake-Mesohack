import styled from "styled-components";

const Viewers = (props) => {
    return(
        <Container>
            <Wrap>
                <h1 className="hello">FAKE</h1>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <h1 className="hello1">A</h1>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/video2.mp4" type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <h1 className="hello">CAKE</h1>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/video3.mp4"  type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
  margin-top : 30px;
  padding : 30px 0 26px;
  display : grid;
  grid-gap : 25px;
  gap : 25px;
  grid-template-columns : repeat(3, minmax(0, 1fr)) ;

  @media (max-width : 768px) {
      grid-template-columns : repeat(1 , minmax(0 ,1fr)) ;
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius : 10px;
  box-shadow : rgb(0 0 0/ 69%) 0 26px 30px -10px, rgb(0 0 0/ 73%) 0 16px 10px -10px;
  cursor : pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border :3px solid rgba(249, 249, 249, 0.1);
  .hello{
    font-size:70px;
    position:absolute;
    top:30%;
    right:32%;
  }
  .hello1{
    font-size:70px;
    position:absolute;
    top:30%;
    right:45%;
  }

  img{
      inset: 0;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
  }

  video{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      opacity: 0;
      z-index: -1;
  }

  &:hover{
    box-shadow : rgb(0 0 0/ 80%) 0 40px 58px -16px, rgb(0 0 0/ 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video{
        opacity: 1;
    }
  }
`;

export default Viewers;