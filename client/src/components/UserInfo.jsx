import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

export default function UserInfo({
  userName,
  commentNum,
  reportedNum,
  viewInfo,
}) {
  return (
    <UserProfile viewInfo={viewInfo}>
      <FaUserCircle size={"40%"} color="lightgrey"></FaUserCircle>
      <UserName>{userName}</UserName>
      <div className="userName">댓글 횟수 : {commentNum}</div>
      <div className="userInfo">신고 횟수 : {reportedNum}</div>
    </UserProfile>
  );
}

const UserProfile = styled.div`

  display: ${(props) => (props.viewInfo ? "flex;" : "none;")}
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation-duration: 0.5s;
  animation-name: fadeInDown;

  @keyframes fadeInDown {
    0% {
      height: 0%;
      opacity: 0;
      transform: translate3d(0, -10%, 0);
    }
    to {
      height: 100%;
      opacity: 1;
      transform: translate3d(0, -0%, 0);
    }
  }
`;

const UserName = styled.div`
  font-size: 1.5rem;
  color: #8daef2;
  text-align: center;
  width: 100%
  margin-top: 10%;
  border-bottom: 2px solid #8daef2;
  margin-bottom: 1%;
`;
