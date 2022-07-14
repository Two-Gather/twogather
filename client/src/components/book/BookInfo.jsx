import React from "react";
import styled from "styled-components";

BookInfo.defaultProps = {
  room: "스튜디오 709",
  date: "2022-07-08",
  startTime: 4,
  endTime: 8,
  personnel: 4,
  pay: 2000,
};

export default function BookInfo({
  room,
  date,
  startTime,
  endTime,
  personnel,
  pay,
}) {
  const useTime = endTime - startTime;
  const totalPay = pay * personnel * useTime;

  return (
    <Container>
      <Header>예약 정보</Header>
      <div>
        <Info>
          <div>예약 룸</div>
          <div>{room}</div>
        </Info>
        <Info>
          <div>예약 날짜</div>
          <div>{date}</div>
        </Info>
        <Info>
          <div>예약 날짜</div>
          <div>
            {startTime}시 ~ {endTime}시
          </div>
        </Info>
        <Info>
          <div>예약 인원</div>
          <div>{personnel}명</div>
        </Info>
        <Info>
          <div>결제 금액</div>
          <div className="pay">{totalPay} ₩</div>
        </Info>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  border-top: 4px solid #5155a6;
  border-bottom: 4px solid #5155a6;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Header = styled.div`
  border-bottom: 2px solid #5155a6;
  padding: 20px 0;
  text-align: left;
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

  & .pay {
    font-weight: bold;
    color: #5155a6;
  }
`;
