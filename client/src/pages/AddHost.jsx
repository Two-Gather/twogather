import React, { useState, useRef } from "react";
import styled from "styled-components";
import Postcode from "../components/admin/Postcode";
import PostcodePopup from "../components/admin/PostcodePopup";

function AddHost() {
  const [imageSrc, setImageSrc] = useState("");
  const [detailImgs, setDatailImgs] = useState([]);

  const [hostInfo, setHostInfo] = useState({
    businessName: "", //상호명
    representativeName: "", //대표자명
    companyRegisNumber: "",
    contactInfo: "", //연락처
    email: "", //이메일
    bankAccountNum: {
      bankName: "",
      accountNum: "",
      name: "",
    },
  });

  const handleChangeState = (e) => {
    setHostInfo({
      ...hostInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hostInfo);
  };

  //TODO
  //데이터들 STATE객체화 시켜서 받기
  //onClick 이벤트 만들기
  //주소 api 따와서 주소불러오기
  //이미지 그리드로 보여주기
  // - 동적으로 생성해야됨

  return (
    <Main>
      <SpaceForm>
        <InputBox className="title">
          <Title>
            Host에 대한 정보를 입력해주세요
            <Hr></Hr>
          </Title>
        </InputBox>
        <InputBox>
          <StyledLabel>상호명</StyledLabel>
          <StyledInput
            type="text"
            width={"40%"}
            name="businessName"
            value={hostInfo.businessName}
            onChange={handleChangeState}
          ></StyledInput>
        </InputBox>

        <InputBox>
          <StyledLabel>대표자 명</StyledLabel>
          <StyledInput
            type="text"
            name="representativeName"
            width={"40%"}
            value={hostInfo.representativeName}
            onChange={handleChangeState}
          ></StyledInput>
        </InputBox>

        <InputBox>
          <StyledLabel>사업자번호</StyledLabel>
          <StyledInput
            type="text"
            width={"40%"}
            name="companyRegisNumber"
            value={hostInfo.companyRegisNumber}
            onChange={handleChangeState}
          ></StyledInput>
        </InputBox>

        <InputBox>
          <StyledLabel>연락처</StyledLabel>
          <StyledInput
            width={"40%"}
            type="text"
            name="contactInfo"
            placeholder="숫자만 입력해 주세요"
            value={hostInfo.contactInfo}
            onChange={handleChangeState}
          ></StyledInput>
        </InputBox>

        <InputBox>
          <StyledLabel>이메일</StyledLabel>
          <StyledInput
            width={"40%"}
            type="email"
            name="email"
            value={hostInfo.email}
            onChange={handleChangeState}
          ></StyledInput>
        </InputBox>

        <InputBox>
          <StyledLabel>계좌번호</StyledLabel>
          <div className="hostAccount">
            <StyledInput
              className="account"
              width={"20%"}
              type="text"
              name="bankName"
              placeholder="은행"
              value={hostInfo.bankAccountNum.bankName}
              onChange={handleChangeState}
            ></StyledInput>
            <StyledInput
              className="account"
              type="text"
              placeholder="계좌번호"
              width={"40%"}
              name="bankAccount"
              value={hostInfo.bankAccountNum.accountNum}
              onChange={handleChangeState}
            ></StyledInput>
            <StyledInput
              className="account"
              width={"20%"}
              placeholder="소유주"
              type="text"
              name="name"
              value={hostInfo.bankAccountNum.name}
              onChange={handleChangeState}
            ></StyledInput>
          </div>
        </InputBox>

        <ButtonBox>
          <StyledButton
            name="cancel"
            className="cancle"
            backGroundColor="#8daef2"
            color="white"
          >
            등록취소
          </StyledButton>
          <StyledButton
            className="inc"
            onClick={handleSubmit}
            color="white"
            backGroundColor="#8daef2"
            name="register"
            className="register"
          >
            Host등록
          </StyledButton>
        </ButtonBox>
      </SpaceForm>
    </Main>
  );
}

///////////////////////////layout///////////////
//중앙정렬

const Main = styled.div`
  margin: 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SpaceForm = styled.form`
  margin-top: 100px;
  margin: 0 10%;
  width: 100%;
  height: 100%;
`;

//////////////////////////////////////////////////
const StyledLabel = styled.div`
  color: #8daef2;
  text-align: start;
  font-family: system-ui;
  margin-bottom: 10px;
  font-size: 1rem;
  font-style: bold;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: 25px;
  padding: 5px;
  border: 1px solid lightgrey;
  outline-color: #8daef2;
  border-radius: 4px;

  & + & {
    margin-left: 3%;
  }
`;

const InputBox = styled.div`
  display: flex;

  align-items: start;
  text-align: start;
  flex-direction: column;
  width: 100%;
  margin: 40px auto;

  :nth-child(2) {
    margin-top: 0;
  }

  &.title {
    margin-bottom: 0px;
  }

  .hostAccount {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  width: 48%;
  height: 40px;
  line-height: 40px;

  border: none;
  border-radius: 10px;
  font-size: 1rem;

  background-color: ${(props) => props.backGroundColor};
  color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.3s;

  :hover {
    background-color: black;
  }
  & + & {
    margin-left: 20px;
  }
`;

const Title = styled.h1`
  color: #8daef2;
  width: 100%;
  text-align: left;
`;

const ButtonBox = styled.div`
  margin: 0 auto;
  margin-top: 10%;

  width: 100%;
  display: flex;
`;

const Hr = styled.hr`
  border: 2px #8daef2 solid;
`;
export default AddHost;
