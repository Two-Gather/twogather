import styled from "styled-components";
import { useSelector } from 'react-redux';


function MyProfile() {


  // 로그인이 안되어 있을 경우
  return (

    <ProfileDiv>
      <ProfileImgDiv>
        <img src="/images/duck.png" alt="프로필 사진" />
        <ProfileImgEditBtn>프로필 수정</ProfileImgEditBtn>
      </ProfileImgDiv>
      <ProfileInfo>
        <tr> <Nickname colSpan='2'> nickname </Nickname>  </tr>
        <tr>
          <InfoTag>이메일</InfoTag>
          <InfoTD> email </InfoTD>
        </tr>
        <tr>
          <InfoTag>비밀번호</InfoTag>
          <InfoTD><a>비밀번호 변경</a></InfoTD>
        </tr>
        <tr>
          <InfoTag>소셜 로그인 연동</InfoTag>
          <InfoTD>카카오</InfoTD>
        </tr>
      </ProfileInfo>
    </ProfileDiv>

  );
}



const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: wrap-content;
  border: none;
  text-align: center;
`;

const ProfileImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
    padding: 2rem;
  }
`;

const ProfileImgEditBtn = styled.div`
  border: solid #505050;
  width: 7rem;
  padding: 0.2rem;
  font-size: 0.8rem;
`;


const ProfileInfo = styled.table`
  border-collapse: collapse;
  border-spacing: 0;


  tr {
    width: 100%;
    height: 1rem;
  }
`

const Nickname = styled.td`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;

`

const InfoTag = styled.td`
  font-size: 1rem;
  color: #505050;
  width: 10rem;
  text-align: left;
`

const InfoTD = styled.td`
  font-size: 1rem;
  width: 20rem;
  text-align: left;
  height: 1rem;
  
  a {
    text-decoration: underline;
  }
`

export default MyProfile;