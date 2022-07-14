import { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, ContentsDiv, FormDiv, FormTitle, UserBtn, Line } from "../components/register/UserForm";
import Register from "../components/register/Register";

function RegisterForm() {

  const navigate = useNavigate();
  const params = useParams();



  return (
    <Container>
      
      <FormDiv>
        <FormTitle>회원가입</FormTitle>
        <ContentsDiv>
            <div>
              <UserBtn value="USER" onClick={()=> navigate('/register/user')} clicked={params.userType === 'user'}>
                USER
              </UserBtn>
              <UserBtn value="HOST" onClick={()=> navigate('/register/host')} clicked={params.userType === 'host'}>HOST</UserBtn>
            </div>
          <SocialRegisterDiv>
            <SocialRegisterBtn className="kakao">
              <img src="/images/kakaoLogo.png" alt="KAKAO" />
              <p>카카오로 시작하기</p>
            </SocialRegisterBtn>
            <SocialRegisterBtn className="google">
              <img src="/images/googleLogo.png" alt="GOOGLE"></img>
              <p>구글로 시작하기</p>
            </SocialRegisterBtn>
          </SocialRegisterDiv>

          <Line />

          <form className="register-form">
            <Register/>
          </form>
        </ContentsDiv>
      </FormDiv>
    </Container>
  );
}

const SocialRegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0 0.5rem;
`;

const SocialRegisterBtn = styled.button`
  display: flex;
  flex-direction: row;
  height: 2rem;
  width: 13rem;
  border-radius: 10px;
  font-weight: bold;
  margin: 0.5rem;
  border: solid 0.1em #d9d9d9;

  ${(props) => {
    if (props.className === "kakao") return `background-color: #FEE500;`;
    else return ` background-color:white;`;
  }}
  :hover {
    box-shadow: none;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 5rem;
    margin: 0.1rem 0.5rem 0 1.5rem;
  }
  p {
    margin: 0.4rem;
  }
`;





export default RegisterForm;
