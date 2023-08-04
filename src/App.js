import logo from './logo.svg';
import './App.css';
import Props from './Component/exam/Props';
import TernaryOperator from './Component/exam/TernaryOperator';
import Input from './Component/exam/Input';
import SignUp from './Component/exam/SignUp';
import ProductList from './Component/exam/ProductList';

function App() {
  return (
    <>
      {/*  props study 
      <Props color='rgb(120, 0, 255)'/>
      <Props name='강븅찬'/> */}
      {/* 
        삼항연산자 / useState
      <TernaryOperator color={'rgb(120, 0, 255)'} name='안녕하세요'/> */}
      {/* 
        input value 연동
      <Input/> */}
      {/* 
        회원가입
      <SignUp/> */}
      <ProductList/>
    </>
  );
}

export default App;
