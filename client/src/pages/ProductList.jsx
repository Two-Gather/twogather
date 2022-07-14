import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import exImg1 from "../assets/images/ex1.png";
import exImg2 from "../assets/images/ex2.png";

const ex1 = [
  {
    src: [exImg1, exImg2],
    tag: [
      "#강남모임공간",
      "#강남파티룸",
      "#강남럭셔리파티룸",
      "#강남럭셔리모임공간",
      "#앤틱공간대여",
    ],
    title: "강남최대 앤틱모임공간 공유먼트청담",
    address: "서울 강남구 청담동 88-1 하늘빌딩 지하1층",
    price: "150,000",
    review: "12",
  },
];
const ex2 = [
  {
    src: [exImg2, exImg1],
    tag: [
      "#강남모임공간",
      "#강남파티룸",
      "#강남럭셔리파티룸",
      "#강남럭셔리모임공간",
      "#앤틱공간대여",
    ],
    title: "강남최대 앤틱모임공간 공유먼트청담",
    address: "서울 강남구 청담동 88-1 하늘빌딩 지하1층",
    price: "150,000",
    review: "12",
  },
];

let exData = [];
for (let i = 0; i < 12; i++) {
  exData = exData.concat(ex1);
}
for (let i = 12; i < 24; i++) {
  exData = exData.concat(ex2);
}

const renderData = ({ offset, limit }) => {
  return exData
    .slice(offset, offset + limit)
    .map((exData, i) => (
      <ProductCard
        key={i}
        src={exData.src}
        tag={exData.tag}
        title={exData.title}
        address={exData.address}
        price={exData.price}
        review={exData.review}
        link={`/detail/1`}
      />
    ));
};

const Selector = ({ about, clickEvent }) => {
  return (
    <SelectButton onClick={clickEvent}>
      <About>{about}</About>
    </SelectButton>
  );
};

export default function ProductList() {
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  return (
    <div>
      <BottomWrap>
        <SelectorWrap>
          <Selector about="카테고리" />
          <Selector about="지역" />
          <Selector about="날짜" />
          <Selector about="필터 초기화" />
        </SelectorWrap>
        <ProductWrap>{renderData({ offset, limit })}</ProductWrap>

        <Pagination
          total={exData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </BottomWrap>
    </div>
  );
}

const BottomWrap = styled.div`
  margin: 0 15%;
`;

const ProductWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2%;
`;

const SelectButton = styled.button`
  all: unset;
  width: 13vw;
  height: 5vh;
  margin: 1vh 0 6vh 0;
  border: 1px solid #8daef2;
  border-radius: 10px;
  cursor: pointer;
  & + & {
    margin-left: 1vw;
  }
  &:nth-child(4) {
    width: 9vw;
    margin-left: auto;
    div {
      margin: 0;
      text-align: center;
    }
  }
`;
const SelectorWrap = styled.div`
  display: flex;
`;
const About = styled.div`
  color: #8daef2;
  margin-left: 10%;
`;
