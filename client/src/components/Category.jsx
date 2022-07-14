import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import partyIcon from "../assets/images/partyIcon.png";
import studyIcon from "../assets/images/studyIcon.png";
import meetingIcon from "../assets/images/meetingIcon.png";
import danceIcon from "../assets/images/danceIcon.png";
import cameraIcon from "../assets/images/cameraIcon.png";

const CategoryButton = ({ img, title }) => {
  const navigate = useNavigate();

  const handleGoToListByCategoryClick = () => {
    navigate(`/list/${title}`);
  };
  return (
    <ButtonWrap onClick={handleGoToListByCategoryClick}>
      <div className="imgWrap">
        <img src={img} alt={title} />
      </div>
      <div className="categoryTitle">{title}</div>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button`
  all: unset;
  cursor: pointer;
  .imgWrap {
    width: 7vw;
    height: 7vw;
    background-color: #f2f2f2;
    border-radius: 35%;
    text-align: center;
    line-height: 6.5vw;
    transition: all 0.6s;
  }
  img {
    width: 5vw;
    vertical-align: middle;
  }
  .categoryTitle {
    margin-top: 1vh;
    text-align: center;
    font-size: 1.3vw;
    font-weight: 600;
  }
  &:hover {
    .imgWrap {
      box-shadow: 5px 5px 5px #d9d9d9;
    }
  }
`;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.6vh;
`;

export default function Category() {
  return (
    <CategoryWrap>
      <CategoryButton img={partyIcon} title="파티룸" />
      <CategoryButton img={studyIcon} title="스터디룸" />
      <CategoryButton img={meetingIcon} title="회의실" />
      <CategoryButton img={danceIcon} title="연습실" />
      <CategoryButton img={cameraIcon} title="스튜디오" />
    </CategoryWrap>
  );
}
