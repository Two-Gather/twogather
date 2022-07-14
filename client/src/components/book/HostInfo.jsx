import React from "react";
import styled from "styled-components";

HostInfo.defaultProps = {
  placeName: "스튜디오 709",
  hostName: "홍길동",
  businessNum: "123-45-67890",
  hostPhone: "010-0214-6564",
  hostEmail: "host@naver.com",
};

export default function HostInfo(props) {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Header>호스트 정보</Header>

        <Content>
          <div>공간 상호</div>
          <div>{props.placeName}</div>
        </Content>
        <Content>
          <div>대표자명</div>
          <div>{props.hostName}</div>
        </Content>
        <Content>
          <div>사업자 번호</div>
          <div>{props.businessNum}</div>
        </Content>
        <Content>
          <div>연락처</div>
          <div>{props.hostPhone}</div>
        </Content>
        <Content>
          <div>이메일</div>
          <div>{props.hostEmail}</div>
        </Content>
      </Container>

      <Container>
        <Header>환불 정책</Header>

        <Content>
          <div>공간 사용 7일 전</div>
          <div>100% 환불</div>
        </Content>
        <Content>
          <div>공간 사용 5일 전</div>
          <div>80% 환불</div>
        </Content>
        <Content>
          <div>공간 사용 3일 전</div>
          <div>50% 환불</div>
        </Content>
        <Content>
          <div>공간 사용 당일</div>
          <div>환불 불가</div>
        </Content>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 4px solid #a8c1e8;
  padding: 20px 0;
  text-align: left;
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  padding: 10px 0;
  font-size: 0.9rem;

  & + & {
    border-top: 1px solid #f2f2f2;
  }

  & div:first-child {
    width: 30%;
  }
`;
