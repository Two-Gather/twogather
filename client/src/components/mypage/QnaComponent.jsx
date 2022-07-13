import styled from "styled-components";


const QNAs = [
  {
    space: '딘 어게인 성수 - 샤워 생일파티',
    nickname: '연진',
    question: '빔프로젝트에 노트북 연결 가능한가요?',
    questionDate: '2022-02-02',
    answer: '네, 가능합니다.',
    replyDate: '2022-02-03',
  },
  {
    space: '파티파티룸',
    nickname: '연진',
    question: '인원 5명에서 6명으로 변경하려고 합니다.',
    questionDate: '2022-02-02',
    answer: '따로 연락주시면 예약확인 후 변경절차 진행해드리겠습니다.',
    replyDate: '2022-02-03',
  },
  {
    space: '파티파티룸22',
    nickname: '연진',
    question: '에어컨 리모콘 못찾겠어요 ㅠㅠ',
    questionDate: '2022-02-02',
    answer: '쇼파 옆 탁자위에 봐보세요.',
    replyDate: '2022-02-03',
  },
]


function QnaComponent() {
  const deleteBtnstyle = {
    display: "inline-block",
    height: "2rem",
    width: "3rem",
    border: "solid black 0.1rem",
    margin: "0.1rem",
    backgroundColor: "white",
  };

  return (
    <>
      <tr>
        <td>딘 어게인 성수 - 샤워 생일파티</td>
        <td style={{ textOverflow: "ellipsis" }}>
          빔프로젝트에 노트북 연결 가능한가요?
        </td>
        <td>2020-02-02</td>
        <td>
          답변 대기중 <button style={deleteBtnstyle}>삭제</button>
        </td>
      </tr>
      <QnaTR>
        <td colspan="4">
          <span bold>Q. </span> <span>개인 노트북 빔프로젝트에 연결해서 사용가능한가요?</span> <br />
          <span bold>A. </span> <span>네, 가능합니다.</span>
        </td>
      </QnaTR>
    </>
  );
}

const QnaTR = styled.tr`
  span-size: 4;
  text-align: left;
  background-color: #D9D9D9;

  span {
    display: inline;
    ${props => props.bold ? `font-size: 2rem; font-weight: bold;`:``}
  }
`;

export default QnaComponent;
