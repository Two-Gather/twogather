import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeImageSlider from "../components/HomeImageSlider";
import Category from "../components/Category.jsx";
import Recommendation from "../components/Recommendation.jsx";

export default function Home() {
  return (
    <div>
      <HomeImageSlider />
      <ButtonWrap>
        <Category />
        <Recommendation />
      </ButtonWrap>
    </div>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  margin: 0 15%;
  flex-direction: column;
`;
