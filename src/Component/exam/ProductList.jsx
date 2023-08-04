import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
    padding: 2rem;
  }
  button {
    width: 50px;
    height: 30px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

 background: #fff;
 width: 1000px;
`;

const ItemFrame = styled.div`
  border-radius: 5px;
  width: 20%;
  padding: 1rem 2rem;
  border: 1px solid #000;
`;
const Counter = (props) => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1)
  }
  const countDown = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      개수 : {count} <br/>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <div>총 가격: {props.price * count}</div>
     </div>
  );
}
const Item  = () => {
  const productList = [
    {
      id: 1,
      Name: '상품이름1',
      Price: 500,
    },{
      id: 2,
      Name: '상품이름2',
      Price: 1100,
    },{
      id: 3,
      Name: '상품이름3',
      Price: 100,
    },{
      id: 4,
      Name: '상품이름4',
      Price: 9999,
    },{
      id: 5,
      Name: '상품이름5',
      Price: 1040214,
    },
  ];
  return (
    <>
    {productList.map((item, index) => {
      return (
        <ItemFrame>
          <h2>{item.Name}</h2>
          <p> 
            가격 : {item.Price}원
          </p>
          <Counter price={item.Price}/>
        </ItemFrame>
      );
    })}
    </>
  );
}

const ProductList = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
      <Item/>
      </Wrapper>
    </>
  )
}

export default ProductList