import { useState, useEffect } from "react";
import styled from "styled-components";

import {
  validateEmail,
  validatePassword,
} from "../../assets/utils/UsefulFunction";

function Register() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceAgree, setServiceAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const isNicknameValid = nickname.length >= 2 && nickname.length <= 10;
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isPasswordSame = password === confirmPassword;
  const isFormValid =
    isNicknameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordSame &&
    serviceAgree &&
    privacyAgree;

  useEffect(() => {}, []);

  const handleAllAgree = () => {
    // 전체동의 클릭시
    if (serviceAgree && privacyAgree) {
      setServiceAgree(false);
      setPrivacyAgree(false);
    } else {
      setServiceAgree(true);
      setPrivacyAgree(true);
    }
  };

  return (
    <RegisterDiv>
      <RegisterInputDiv>
        <tr className="nickname-input">
          <TagTD>닉네임</TagTD>
          <InputTD isValid={isNicknameValid}>
            <input
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></input>
          </InputTD>
        </tr>
        {showAlert && !isNicknameValid && (
          <AlertTR className="alert-msg">
            <td colspan="2">2~10자로 입력해주세요.</td>
          </AlertTR>
        )}
        <tr className="email-input">
          <TagTD>이메일</TagTD>
          <InputTD isValid={isEmailValid}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </InputTD>
        </tr>
        {showAlert && !isEmailValid && (
          <AlertTR className="alert-msg">
            <td colspan="2">이메일 형식이 올바르지 않습니다.</td>
          </AlertTR>
        )}
        <tr className="password-input">
          <TagTD>비밀번호</TagTD>
          <InputTD isValid={isPasswordValid}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </InputTD>
        </tr>
        {showAlert && !isPasswordValid && (
          <AlertTR className="alert-msg">
            <td colspan="2">
              8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
            </td>
          </AlertTR>
        )}
        <tr className="password-confirm-input">
          <TagTD>비밀번호 확인</TagTD>
          <InputTD isValid={isPasswordSame}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>
          </InputTD>
        </tr>
        {showAlert && !isPasswordSame && (
          <AlertTR className="alert-msg">
            <td colspan="2">비밀번호가 일치하지 않습니다.</td>
          </AlertTR>
        )}
      </RegisterInputDiv>

      <AgreementDiv>
        <div>
          <input
            className="service-agree"
            type="checkbox"
            checked={serviceAgree}
            onClick={() => setServiceAgree((agree) => !agree)}
          ></input>
          <span>(필수) 서비스 이용약관 동의 </span>
        </div>
        <div>
          <input
            className="privacy-agree"
            type="checkbox"
            checked={privacyAgree}
            onClick={() => setPrivacyAgree((agree) => !agree)}
          ></input>
          <span>(필수) 개인정보 처리 동의 </span>
        </div>
        <div>
          <input
            className="all-agree"
            type="checkbox"
            checked={serviceAgree && privacyAgree}
            onClick={() => handleAllAgree()}
          ></input>
          <span className="agree-all"> 전체 동의 </span>
        </div>
        {showAlert && (!serviceAgree || !privacyAgree) && (
          <AlertTR> 약관 동의가 필요합니다.</AlertTR>
        )}
      </AgreementDiv>

      <RegisterBtn
        type="submit"
        disabled={!isFormValid}
        onClick={() => setShowAlert(true)}
      >
        가입하기
      </RegisterBtn>
    </RegisterDiv>
  );
}

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterInputDiv = styled.table`
  border-spacing: 1rem 0.5rem;
`;

const TagTD = styled.td`
  text-align: right;
  font-weight: bold;
  font-size: 0.8rem;
  color: #8daef2;
`;

const InputTD = styled.td`
  input {
    width: 10rem;
    padding: 0.4rem;
    border: solid #d9d9d9;
    border-radius: 10px;
  }
`;
const AlertTR = styled.tr`
  color: red;
  font-size: 0.5em;

  td {
    text-align: right;
  }
`;

const AgreementDiv = styled.div`
  text-align: left;
  font-size: 0.8rem;
  color: #505050;
  width: 12rem;
  margin-top: 1.5rem;

  .agree-all {
    color: #8daef2;
    font-weight: bold;
  }
`;

// 동의 여부 처리 (전체 동의 시 => )

const RegisterBtn = styled.button`
  height: 2rem;
  width: 15rem;
  margin: 1.5rem;
  border-radius: 10px;
  background-color: #8daef2;
  color: white;
  font-weight: bold;
  border: none;

  :hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

export default Register;
