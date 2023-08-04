import React, { useState } from 'react'

const TernaryOperator = ({ color, name }) => {
  const [time, setTime] = useState(0);
  return (
    <>
      <div style={{color}}>
        {time}
        {time >= 3 ? `오후 ${time}시 입니다.` : ''}
      </div>
      <button onClick={() => setTime(time + 1)}>+1</button>
      <button onClick={() => setTime(time - 1)}>-1</button>
    </>
  );
}

export default TernaryOperator