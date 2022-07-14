import React from "react";
import styled from "styled-components";
import { Logo } from "./Header.jsx";

const FooterWrap = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 35vh;
  span:nth-child(1) {
    position: relative;
    left: 6vw;
    top: 8vh;
  }
`;

const Line = styled.div`
  background-color: #a0a0a0;
  height: 1px;
  margin: 0 5vw;
  margin-top: 10vh;
`;

const TextLine = styled.div`
  margin: 2vh 6vw;
  display: flex;
`;

const Text = styled.div`
  color: ${({ color }) => color};
`;

export default function Footer() {
  return (
    <FooterWrap>
      <span>
        <Logo />
      </span>
      <Line />
      <TextLine>
        <Text color={"#a0a0a0"}>상호명&nbsp;&nbsp;</Text>
        <Text color={"#000000"}>
          TWOGATHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text color={"#a0a0a0"}>팀원&nbsp;&nbsp;</Text>
        <Text color={"#000000"}>
          강예정 김미지 김태훈 나해란 남연진 장종원&nbsp;&nbsp;
        </Text>
      </TextLine>
      <TextLine>
        <Text color={"#a0a0a0"}>사업자등록번호&nbsp;&nbsp;</Text>
        <Text color={"#000000"}>
          xxx-xx-xxxxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text color={"#a0a0a0"}>통신판매업&nbsp;&nbsp;</Text>
        <Text color={"#000000"}>
          xxxx-서울강남-xxxxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text color={"#a0a0a0"}>개인정보보호책임자&nbsp;&nbsp;</Text>
        <Text color={"#000000"}>아무개</Text>
        <div
          className="rightSide"
          style={{ marginLeft: "auto", display: "flex" }}
        >
          <Text color={"#a0a0a0"}>운영시간&nbsp;&nbsp;</Text>
          <Text color={"#000000"}>10:00 ~ 18:00</Text>
        </div>
      </TextLine>
      <TextLine style={{ justifyContent: "flex-end" }}>
        <Text color={"#a0a0a0"} style={{ fontWeight: "100" }}>
          @copyright team2. All Rights Reserved.
        </Text>
      </TextLine>
    </FooterWrap>
  );
}
