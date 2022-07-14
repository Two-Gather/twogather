import React from "react";
import styled from "styled-components";

PostBookerInfo.defaultProps = {
  name: "강예정",
  phone: "01012345678",
  email: "abc@naver.com",
  purpose: "촬영",
  request: "의자 4개 준비 부탁드립니다.",
};

export default function PostBookerInfo({
  name,
  phone,
  email,
  purpose,
  request,
}) {
  return (
    <Container>
      <Header>예약자 정보</Header>
      <div>
        <Info>
          <div>이름</div>
          <div>{name}</div>
        </Info>
        <Info>
          <div>연락처</div>
          <div>{phone}</div>
        </Info>
        <Info>
          <div>이메일</div>
          <div>{email}</div>
        </Info>
        <Info>
          <div>사용 목적</div>
          <div>{purpose}</div>
        </Info>
        <Info>
          <div>요청 사항</div>
          <div>{request}</div>
        </Info>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Header = styled.div`
  border-bottom: 4px solid #a8c1e8;
  padding: 20px 0;
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  font-size: 0.9rem;

  & div:first-child {
    width: 30%;
  }

  & + & {
    border-top: 1px solid #f2f2f2;
  }
`;
