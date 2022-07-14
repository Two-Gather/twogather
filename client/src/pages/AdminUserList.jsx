import styled from "styled-components";
import StripeList from "../components/StripeList";
import StripeLayout from "../components/StripeLayout";

function AdminUserList() {
  const data = [
    {
      nickname: "강예정",
      email: "파티파티룸",
      phoneNumber: "010-3000-2000",
      sns: "5000",
      role: "admin",
      date: "1월18일",
      block: false,
    },
    {
      nickname: "강예정",
      email: "파티파티룸",
      phoneNumber: "010-3000-2000",
      sns: "5000",
      role: "admin",
      date: "1월18일",
      block: false,
    },
    {
      nickname: "강예정",
      email: "aa@aaa.com",
      phoneNumber: "010-3000-2000",
      sns: "5000",
      role: "admin",
      date: "1월18일",
      block: false,
    },
  ];
  const headers = [
    "닉네임",
    "E-Mail",
    "전화번호",
    "SNS",
    "Role",
    "가입날짜",
    "차단",
  ];
  const keys = ["nickname", "email", "phoneNumber", "sns", "role", "date"];
  const mainTitle = "유저정보";
  const columnTemplete = "1fr 2fr 1.5fr 1fr 1fr 1.5fr 1fr";
  const title = "";
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
        columnTemplete={columnTemplete}
        keys={keys}
        listName="USER"
      ></StripeLayout>
    </>
  );
}

export default AdminUserList;

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
