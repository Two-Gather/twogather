import styled from "styled-components";
import MyProfile from "../components/mypage/MyProfile";
import MyReservation from "../components/mypage/MyReservation"
import MyQnA from "../components/mypage/MyQnA";
import { PageTitle } from "../components/register/UserForm";
import {useSelector} from 'react-redux';


function MyPage() {
  const user = useSelector((store) => store.user);

  console.log(user);

  return (
    <Container>
      <PageTitle>마이페이지</PageTitle>
      <MyProfile></MyProfile>
      <MyReservation></MyReservation>
      <MyQnA></MyQnA>
    </Container>
  );
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 5rem;
  margin: 0 15vw;
`;



export default MyPage;