import styled from "styled-components";
import QnaComponent from "./QnaComponent.jsx";
import Pagination from "../Pagination";
import { useState } from 'react';



function MyQnA() {
    const total_page = 10;
    const limit_page = 5;
    const page_number = 0 ;
    const posts_per_page = 5; 

    return(
        <QnADiv>
            <h3>Q&A</h3>
            <QnATable>
                <QnATableHead>
                    <td className="space"> 공간정보 </td>
                    <td className="description"> 문의내용 </td>
                    <td className="registered-on"> 작성일 </td>
                    <td className="replyed"> 답변유무 </td>
                </QnATableHead>
                <QnaComponent></QnaComponent>  
            </QnATable>
            <Pagination total={total_page} limit={limit_page} page={page_number} setPage={posts_per_page}></Pagination>
        </QnADiv>       
    );
}

const QnADiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: wrap-content;
  border: none;
  text-align: center;
  margin: 3rem 0;

  h3 {
    text-align: left;
    font-size: 1.5rem;
    color: #8daef2;
    margin: 0 15vw;
  }
`;



const QnATable = styled.table`
    border-top: 2px;
    margin: 0 15vw;
`

const QnATableHead = styled.thead`
    font-weight: bold;
    background-color: #BBD3F2; 
    opacity: 0.5;
`


export default MyQnA;