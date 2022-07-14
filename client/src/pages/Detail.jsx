import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSlider from "../components/detail/ImageSlider";
import Map from "../components/detail/Map";
import SelectRoom from "../components/detail/SelectRoom";
import { MyDatePicker } from "../components/detail/DatePicker";
import ToTop from "../components/ToTop";
import axios from "axios";

Detail.defaultProps = {
  title: "스튜디오 709",
  hashTag: ["#스튜디오", "#촬영대관"],
  contents: {
    introduce: [
      "1호점과 다른 컨셉으로 공간을 채운 24평 규모의 렌탈스튜디오 홈스윗홈 2호점입니다. \n",
      "방문해주시는 게스트분들의 인원에 따른 추가요금 없이 전액 무료로 지원하고 있습니다. (최대 수용인원 약 20명) \n",
      "저희 스튜디오는 촬영하시는 컨셉을 위해 크게 3개의 섹션을 한 공간안에 구성하였습니다. \n",
      "*대형러그와 쇼파를 배치한 아늑한 느낌의 거실 공간 \n",
      "*편안한 느낌의 우드활용과 메이플&화이트 조합의 침실 공간 \n",
      "*깨끗한 올화이트 가구와 핑크 소품들로 포인트를 준 파우더룸 공간 \n",
    ],
    notice: [
      "안전 및 도난 방지를 위하여 CCTV 가 작동중입니다.\n",
      "전문 촬영팀을 위한 가성비 공간으로 기본적으로 제공하는 촬영장비는 없습니다.\n",
      "퇴실후 항상 정리 및 내부 소독 진행 합니다(예약시간이 붙어있는 경우는 불가하니 양해 부탁드립니다)\n",
      "기존의 가구 및 소품등 구조를 필요에 의해 변경하신 경우 마감시간 전에 원상복구 해주세요. 다음 게스트님에게 피해가 됩니다.\n",
      "지하인 관계로 자연광은 들어오지 않지만 자연광 연출을 위해 커튼 안쪽에 조명이 설치되어 있습니다.\n",
    ],
    review: [
      {
        id: "강예정",
        content: "너무 만족스러웠습니다 공간도 이뻤어요 생각보다 넓네요 \n",
      },
      {
        id: "김미지",
        content: "쾌적하고 좋았습니다. 인상깊어요 \n",
      },
      {
        id: "나해란",
        content:
          "예약할 때도 사장님께서 배려해주시고, 장소 너무 깔끔히 되어있어서 잘 사용하였습니다!ㅎㅎ 다음 촬영 때도 또 사용하고 싶은 장소입니다~~😊 \n",
      },
    ],
    qna: [
      {
        id: "남연진",
        question: "냉방 가능한가요? \n",
        answer: "네 가능합니다^^ \n",
      },
      {
        id: "김태훈",
        question: "의자 10개 가능한가요? \n",
        answer: "넵 가능합니다^^ \n",
      },
      {
        id: "장종원",
        question: "몇명까지 수용 가능한가요? \n",
        answer: "10명까지 가능합니다! \n",
      },
    ],
  },
};

// 탭 스크롤 함수
function changeTab(props) {
  const thisContent = document.querySelector(`.${props}`);
  thisContent.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Detail({ title, hashTag, contents }) {
  const [person, setPerson] = useState(0);

  // const req = await axios.get("/dummyBook.json");
  // console.log(req.data.books);

  return (
    <FullContainer>
      <DetailHeader>
        <Title>[{title}]</Title>
        <div style={{ margin: "20px 0" }}>
          {hashTag.map((tag, i) => (
            <HashTag key={i}>{tag}</HashTag>
          ))}
        </div>
      </DetailHeader>

      <DetailContainer>
        <LeftContainer>
          <ImageSlider />
          <TabContainer>
            <Tabs>
              <TabTitle id="tab1" onClick={(e) => changeTab(e.target.id)}>
                공간소개
              </TabTitle>
              <TabTitle id="tab2" onClick={(e) => changeTab(e.target.id)}>
                유의사항
              </TabTitle>
              <TabTitle id="tab3" onClick={(e) => changeTab(e.target.id)}>
                후기
              </TabTitle>
              <TabTitle id="tab4" onClick={(e) => changeTab(e.target.id)}>
                Q & A
              </TabTitle>
            </Tabs>

            <div className="tab-box">
              <TabContent className="tab1">
                <h2>공간소개</h2>
                <p>{contents.introduce}</p>
              </TabContent>
              <TabContent className="tab2">
                <h2>유의사항</h2>
                <p>{contents.notice}</p>
              </TabContent>
              <TabContent className="tab3">
                <h2>후기</h2>
                {contents.review.map((item, i) => {
                  return (
                    <div key={i} className="itemBox">
                      <p className="itemUser">{item.id}</p>
                      <p className="itemContent">{item.content}</p>
                    </div>
                  );
                })}
              </TabContent>
              <TabContent className="tab4">
                <h2>Q&A</h2>
                {contents.qna.map((item, i) => {
                  return (
                    <div key={i} className="itemBox">
                      <p className="itemUser">{item.id}</p>
                      <p className="itemContent">{item.question}</p>
                      <p className="itemContent">↪ {item.answer}</p>
                    </div>
                  );
                })}
              </TabContent>
            </div>
          </TabContainer>
          <Map />
        </LeftContainer>

        <RightContainer>
          <SelectRoom />
          <MyDatePicker />

          <Personnel>
            예약 인원:
            <input
              type="number"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            />
            명
          </Personnel>
          <Button>
            <Link to="/book" className="move">
              예약하기
            </Link>
          </Button>
        </RightContainer>

        <ToTop />
      </DetailContainer>
    </FullContainer>
  );
}

const FullContainer = styled.div`
  max-width: 100%;
  margin: 5% 10%;
  display: flex;
  flex-direction: column;
`;

const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
`;

const HashTag = styled.span`
  display: inline-block;
  background-color: #9ba3eb;
  color: white;
  border-radius: 20px;
  padding: 0 5px;
  margin-right: 10px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 70%;
`;

const TabContainer = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid #bbd3f2;
  border-width: 2px 0;
  font-size: 0.9rem;
`;

const TabTitle = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: normal;
  padding: 10px 0;
  margin: 0;

  & + div {
    border-left: 2px solid #bbd3f2;
  }

  &:hover {
    font-weight: bold;
  }
`;

const TabContent = styled.div`
  width: 100%;
  padding: 20px;
  white-space: pre-wrap;
  font-size: 0.9rem;
  text-align: left;

  & + div {
    border-top: 2px solid #bbd3f2;
  }

  & .itemBox + .itemBox {
    border-top: 1px solid #f2f2f2;
  }

  & .itemUser + .itemUser {
    font-weight: bold;
  }

  & .itemContent {
    margin-left: 7%;
  }

  p {
    line-height: 2.3rem;
  }
`;

const RightContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Personnel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  & > input {
    width: 50%;
    max-height: 22px;
    border: 2px solid #8daef2;
    border-radius: 5px;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  /* 스피너 제거 */
  /* Chrome, Safari, Edge, Opera */
  & > input::-webkit-outer-spin-button,
  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & > input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background: #8daef2;

  &:hover {
    box-shadow: 2px 2px 5px -1px #a6a9b6;
  }

  & .move {
    text-decoration: none;
    color: #fff;
  }
`;
