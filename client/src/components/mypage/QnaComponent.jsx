import styled from "styled-components";

function QnaComponent() {
    const deleteBtnstyle = {
        display: 'inline-block',
        height: '2rem',
        width: '3rem',
        border: 'solid black 0.1rem',
        margin: '0.1rem',
        backgroundColor: 'white'
    }
    return (
        <>
            <tr>
                <td>딘 어게인 성수 - 샤워 생일파티</td>
                <td style={{textOverflow: 'ellipsis'}}>빔프로젝트에 노트북 연결 가능한가요?</td>
                <td>2020-02-02</td>
                <td>답변 대기중 <button style={deleteBtnstyle}>삭제</button></td>
            </tr>
            <QnaTR rowSpan={4}>
                <td >
                    <h2>Q. </h2> <span>개인 노트북 빔프로젝트에 연결해서 사용가능한가요?</span>
                    <h2>A. </h2> <span>네, 가능합니다.</span>
                </td>
            </QnaTR>      
        </>
    )
}

const QnaTR = styled.tr`
    span-size: 4;
    background-color: light-grey;
` 




export default QnaComponent;