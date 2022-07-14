import styled from "styled-components";
import ReservedRoom from "./ReservedRoom";
import Pagination from "../Pagination";

function MyReservation() {
    const total_page = 10;
    const limit_page = 5;
    const page_number = 0 ;
    const posts_per_page = 5; 

    return(
        <ReservationDiv>
            <h3>나의 예약 정보</h3>
            <ReservationTable>
                <ReservedRoom></ReservedRoom>
            </ReservationTable>
            <Pagination total={total_page} limit={limit_page} page={page_number} setPage={posts_per_page}></Pagination>
        </ReservationDiv>       
    );
}

const ReservationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: wrap-content;
  border: none;
  text-align: center;
  margin: 3rem 0;

  h3 {
      text-align: left;
      font-size: 1.5rem;
      color: #8daef2;
      margin: 0 15vw;
  }
`;



const ReservationTable = styled.table`
    div {
    border-bottom: #BBD3F2;
    }
`


export default MyReservation;