import React from "react";
import styled from "styled-components";
import HostInfo from "../components/book/HostInfo";
import BookInfo from "../components/book/BookInfo";
import PostBookerInfo from "../components/book/PostBookerInfo";
import ToTop from "../components/ToTop";

export default function Book() {
  return (
    <FullContainer>
      <BookInfo />
      <PostBookerInfo />
      <HostInfo />
      <Button>취소하기</Button>
      <ToTop />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  max-width: 100%;
  margin: 5% 15%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  width: 30%;
  padding: 5px;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
  background: #8daef2;
  color: #fff;
  position: absolute;
  bottom: -60px;
  right: 0;

  &:hover {
    box-shadow: 2px 2px 5px -1px #a6a9b6;
    transition: 0.3s;
  }
`;
