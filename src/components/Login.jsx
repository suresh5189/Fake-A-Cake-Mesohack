import React from 'react'
import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/ctalogo1.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 14/04/2022, the price of Disney+ and The Disney Bundle will increases by $1.</Description>
          <CTALogoTwo src="/images/ctalogo2.png" alt="" />
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
  height: 100%;
  background-image: url("/images/bgimage.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 100%;
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
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;  
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login






