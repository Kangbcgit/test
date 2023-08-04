import React, { useState } from 'react'
import styled from 'styled-components';

const Parent = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px;
  border:5px solid blue;
`;

const Input = () => {
  const [inputData, setInputData] = useState('');
  const dataReset = () => {
    setInputData('');
  }
  const inputText = (e) => {
    setInputData(e.target.value)
  }
  return (
    <>
    {/* 인풋태그 상태관리
        input영역에 text 작성
        그 text는 inputData 뒤에 나온다
        reset 버튼을 누르면 사라진다
    */}
      <Parent>
        <input onChange={inputText} value={inputData}/>
        <button onClick={dataReset}>RESET</button>
        <p>값:{inputData}</p>
      </Parent>
    </>
  )
}

export default Input