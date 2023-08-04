import React from 'react'

const Props = (props) => {
  return (
      <div>
        <h1 style={{color: props.color}}>
          지금은 리액트 시간
          {props.name}
        </h1>
      </div>
  )
}

export default Props