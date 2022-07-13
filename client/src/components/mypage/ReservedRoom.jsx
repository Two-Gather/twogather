import styled from "styled-components";

function ReservedRoom() {
  return (
    <RoomDiv>
      <InfoDiv>
        <RoomImg src="/images/partyRoom.png" alt="공간 이미지"></RoomImg>
        <InfoText>
          <InfoTag color="black">딘어게인 성수 - 브라이덜 샤워 생일파티</InfoTag> <br/>
          <InfoTag color="light-grey">예약자: 홍길동 / 4인</InfoTag>
          <InfoTag color="grey">장소: 서울 성동구 성덕정 17길 12 4층</InfoTag>
          <InfoTag color="grey">예약일시: 2022년 7월 일 11시-2시</InfoTag>
        </InfoText>
      </InfoDiv>
      <EditDiv>
        <a>예약취소</a>
        <a href='/myPage/addQna'>리뷰작성</a>
      </EditDiv>
    </RoomDiv>
  );
}

const RoomDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    div + div {
      margin-top: 1rem;
    }
  }
`;


const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60vw;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const RoomImg = styled.img`
  width: 10rem;
  height: 6rem;
`;
const InfoText = styled.span`
  text-align: left;

`
const InfoTag = styled.p`
  font-size: 1rem;
  ${props => 
    (props.color ==='black') ? `font-weight: bold;` :`color: ${props.color};`
  }
  margin: 0.5rem 2rem;
`;

const EditDiv =styled.div`
  text-algin: left;
  a {
    text-decoration: underline;
    padding: 0;
  }
  a + a {
    margin-left: 1rem;
  }
`

export default ReservedRoom;
