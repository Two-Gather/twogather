import React, { useState } from "react";
import styled from "styled-components";
import StripeLayout from "../components/StripeLayout";
function HostBookList() {
  const data = [
    {
      booker: "강예정",
      bookedRoom: "파티파티룸",
      bookMembers: "5",
      price: "5000",
      phoneNumber: "010-3000-2000",
      date: "1월18일",
      modify: false,
    },
    {
      booker: "강예쩡",
      bookedRoom: "파티파티룸",
      bookMembers: "5",
      price: "5000",
      phoneNumber: "010-3000-2000",
      date: "1월18일",
      modify: false,
    },

    {
      booker: "탱구",
      bookedRoom: "파티파티룸",
      bookMembers: "5",
      price: "5000",
      phoneNumber: "010-3000-2000",
      date: "1월18일",
      modify: false,
    },
  ];

  const keys = [
    "booker",
    "bookedRoom",
    "bookMembers",
    "price",
    "phoneNumber",
    "date",
  ];
  const headers = [
    "예약자",
    "예약방",
    "예약인원",
    "예약금액",
    "전화번호",
    "예약시간",
    "관리",
  ];
  const mainTitle = "미지미지룸";
  const title = "예약내역";
  const columnTemplete = "1fr 2fr 1.2fr 1.2fr 2fr 1fr 1.2fr";

  return (
    <>
      <ReservationHeader>
        <TitleName>
          <MainTitle>{mainTitle}</MainTitle>
          {title ? <Title className="title">{title}</Title> : ""}
        </TitleName>
      </ReservationHeader>

      <StripeLayout
        datas={data}
        headers={headers}
        mainTitle={mainTitle}
        title={title}
        columnTemplete={columnTemplete}
        keys={keys}
        listName="BOOK"
      ></StripeLayout>
    </>
  );
}

export default HostBookList;

const ReservationHeader = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 10%;
`;
const TitleName = styled.div`
  border-bottom: 2px solid #8daef2;
`;
const Title = styled.span`
  font-size: 1.2rem;
  line-height: 35px;
  margin: 10px;
`;

const MainTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: #8daef2;
`;

const BookBox = styled.div`
  width: 80%;
  height: 80%;
`;
