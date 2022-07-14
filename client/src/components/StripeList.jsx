import styled from "styled-components";
import { RiEdit2Fill } from "react-icons/ri";
import ListItem from "./StripeListItem";
import StripeLayout from "./StripeLayout";
function StripeList({ data, mainTitle }) {
  const mockHeader = [
    "예약자",
    "예약방",
    "예약인원",
    "예약금액",
    "전화번호",
    "예약시간",
    "관리",
  ];

  const columnTemplete = "1fr 2fr 1fr 1fr 2fr 1fr 1.2fr";
  const mockdata = [
    {
      booker: "강예정",
      bookedRoom: "파티파티룸",
      bookMembers: "5",
      price: "5000",
      phoneNumber: "010-3000-2000",
      date: "1월18일",
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

  return (
    <>
      <StripeLayout
        mainTitle={"hello"}
        datas={mockdata}
        headers={mockHeader}
        columnTemplete={columnTemplete}
      ></StripeLayout>
    </>
  );
}
export default StripeList;
