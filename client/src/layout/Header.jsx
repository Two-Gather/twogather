import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/images/logo.png";
import searchIcon from "../assets/images/searchIcon.png";

export const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <LogoWrap onClick={handleClick}>
      <img className="logoImg" src={logoImg} alt="logo" />
      <div className="logoTitle">TWOGATHER</div>
    </LogoWrap>
  );
};

const Search = () => {
  return (
    <SearchWrap>
      <input className="searchInput" />
      <button className="searchButton">
        <img src={searchIcon} />
      </button>
    </SearchWrap>
  );
};

const HostPage = () => {
  return (
    <TextWrap>
      <div>공간등록 및 관리</div>
    </TextWrap>
  );
};

const Notice = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notice");
  };
  return (
    <TextWrap onClick={handleClick}>
      <div>공지사항</div>
    </TextWrap>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <TextWrap onClick={handleClick}>
      <div>로그인</div>
    </TextWrap>
  );
};

const Logout = () => {
  return (
    <TextWrap>
      <div>로그아웃</div>
    </TextWrap>
  );
};

const TextWrap = styled.div`
  margin-left: 2vw;
  div {
    color: black;
    font-size: 1.5vw;
    font-weight: bold;
    cursor: pointer;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  cursor: pointer;
  .logoImg {
    width: 2vw;
  }
  .logoTitle {
    font-size: 2vw;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  width: 30vw;
  margin: 0 1vw;
  border: 2px solid #8daef2;
  border-radius: 10px;
  input {
    all: unset;
    margin: 0 1vw;
    flex-grow: 1;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  button img {
    width: 1.5vw;
    margin: 0 0.5vw;
    flex-shrink: 0;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  max-width: 100%;
  padding: 3% 6%;
`;

const RightWrap = styled.div`
  display: flex;
  margin-left: auto;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <Logo className="headerLogo" />
      <Search />
      <RightWrap>
        <Notice />
        <Login />
      </RightWrap>
    </HeaderWrap>
  );
}
