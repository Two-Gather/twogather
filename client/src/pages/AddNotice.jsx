import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function AddNotice() {
  return (
    <div>
      <AddNoticeWrap>
        <Title>공지사항 추가</Title>
        <SubTitle>제목</SubTitle>
        <NoticeTitleInput />
        <SubTitle style={{ marginTop: "2%" }}>내용</SubTitle>
        <NoticeContentInput />
        <ButtonWrap>
          <Button color={"#f2f2f2"}>취소</Button>
          <Button color={"#8DAEF2"} style={{ color: "white" }}>
            등록
          </Button>
        </ButtonWrap>
      </AddNoticeWrap>
    </div>
  );
}

const AddNoticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 10vh auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin: 8vh 0;
`;

const SubTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #8daef2;
  margin: 0 0 0 17%;
`;

const NoticeTitleInput = styled.input`
  width: 60%;
  height: 5vh;
  border: 2px solid #8daef2;
  border-radius: 10px;
  padding: 0 3%;
  margin: 0 auto;
`;

const NoticeContentInput = styled.textarea`
  width: 60%;
  height: 30vh;
  border: 2px solid #8daef2;
  border-radius: 10px;
  padding: 1% 3%;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 70%;
  margin: 2% auto;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  width: 50%;
  height: 6vh;
  margin: 0 2%;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;
