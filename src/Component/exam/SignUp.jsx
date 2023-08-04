import React, { useState } from 'react'
import styled from 'styled-components'

const Parent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  padding: 30px;
  border:5px solid blue;
  &>input {
    width: 200px;
  }
  &>button {
    width: 200px;
  }
`;

const SignUp = () => {

    const [inputs, setInputs] = useState({
      name: '',
      id: ''
    });

    const inputName = (e) => {
      let {value} = e.target;
      setInputs({...inputs, name: value})
    }

    const inputId = (e) => {
      let {value} = e.target;
      setInputs({...inputs, id: value})
    }
    const reset = () => {
      setInputs({name: '', id: ''})
    }

  return (
    <Parent>
      <input type="text" onChange={inputName} placeholder='이름' value={inputs.name}/>
      <input type="text" onChange={inputId} placeholder='아이디' value={inputs.id}/>
      <br/>
      <button onClick={reset}>초기화</button>
      <div className="box">
        이름 : {inputs.name}<br/>
        아이디 : {inputs.id}
      </div>
    </Parent>
  )
}

export default SignUp