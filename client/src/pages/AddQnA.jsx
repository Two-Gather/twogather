import {CommentTitle, CommentInfo, CommentInput, AddCommentBtnDiv  } from "../components/addComment/CommentForm"
import styled from "styled-components"

function AddQnA() {
    return <QnAContainer>
        <CommentTitle> QnA 등록 </CommentTitle>
        <CommentInfo></CommentInfo>
        <form>
            <CommentInput commentType="QnA 등록" placeholder="이용후기를 작성해주세요. (200자 이내)"></CommentInput>
            <AddCommentBtnDiv></AddCommentBtnDiv>
        </form>
    </QnAContainer>
}


const QnAContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5vw 15vw;
    align-items:center;
`

export default AddQnA;