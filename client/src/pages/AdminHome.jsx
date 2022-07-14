import React, { useState, memo } from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import AdminPage from "./AddHost";
import AdminUserList from "./AdminUserList";
import HostBookList from "./HostBookList";
import AdminBookList from "./AdminBookList";
import { FaUserCircle } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import Notice from "./Notice";

const name = "강예정";
function AdminHome() {
  const [content, setContent] = useState("Greetings");

  function menuClick(props) {
    setContent(props);
  }

  const array = [
    { idx: 0, menuName: "공지사항", stateName: "manageNotice" },
    { idx: 1, menuName: "차트보기", stateName: "Greetings" },
    { idx: 2, menuName: "예약관리", stateName: "manageBooked" },
    { idx: 3, menuName: "유저관리", stateName: "manageUsers" },
    { idx: 4, menuName: "Q & A관리", stateName: "manageQA" },
  ];

  return (
    <>
      <Container>
        <SubContainer>
          <Profile>
            <Img>
              <FaUserTie size={"50%"} color="lightgrey"></FaUserTie>
            </Img>
            <Role>관리자</Role>
            <ManageNav>
              {array.map((obj) => {
                return (
                  <NavItem
                    key={obj.idx}
                    onClick={() => menuClick(obj.stateName)}
                  >
                    {obj.menuName}
                  </NavItem>
                );
              })}
            </ManageNav>
          </Profile>
        </SubContainer>
        <Content>
          <Header>
            <Label>{`어서오세요! `}</Label>
            <Label className="username">{name}</Label>
            <Label>님!</Label>
          </Header>
          {content === "Greetings" ? (
            <Greetings></Greetings>
          ) : content === "manageBooked" ? (
            <AdminBookList></AdminBookList>
          ) : content === "manageUsers" ? (
            <AdminUserList></AdminUserList>
          ) : content === "manageNotice" ? (
            <Notice></Notice>
          ) : (
            <div></div>
          )}
        </Content>
      </Container>
    </>
  );
}

function Greetings() {
  return (
    <>
      <Greeting></Greeting>
      <Chart></Chart>
    </>
  );
}

const Role = styled.p`
  font-size: 1.2rem;
  margin: 10%;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  position: sticky;
  margin: 0 auto;
  min-height: 100%;
`;
const Img = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 10%;
`;

const NavItem = styled.div`
  font-size: 1.3rem;
  border-bottom: #8daef2;
  margin-bottom: 15%;
  cursor: pointer;
  color: grey;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const ManageNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 3rem;
  font-style: bold;
  color: #8daef2;
  margin-bottom: 5%;
  text-decoration: underline;
  text-underline-position: under;
`;

const Content = styled.div`
  // background-color: #f2f2f2;
  padding: 50px;
  border-left: 1px solid #f2f2f2;
  margin: 5% auto;
  width: 60vw;
  height: 80vh;
  border-radius: 20px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
// const d = styled(Content)

const Label = styled.span`
  font-size: 2rem;
  margin-right: 20px;
  &.username {
    font-size: 2.2rem;
    color: blue;
  }
`;

const Greeting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AdminHome;
