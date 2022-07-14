import React from "react";
import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";

Modal.defaultProps = {
  title: "호스트 정보 미등록",
  content: "공간 제공을 시작하기 전에 \n 호스트 정보를 먼저 입력해주세요",
};

export default function Modal({ title, content }) {
  return (
    <Container id="box">
      <ModalContainer>
        <ModalTitle>
          <FiAlertCircle /> {title}
        </ModalTitle>
        <ModalContent>{content}</ModalContent>
        <Button>확인</Button>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 40vh;
  height: 30vh;
  background-color: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 4px solid transparent;
  border-radius: 30px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(45deg, #6e85b7, #b2c8df);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ModalTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const ModalContent = styled.p`
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const Button = styled.button`
  width: 50%;
  border-radius: 10px;
  background: #a8c1e8;
  padding: 5px;
  border: none;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 5px -1px #a6a9b6;
  }
`;
