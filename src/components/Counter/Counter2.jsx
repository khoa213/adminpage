import styled from 'styled-components';
import { useState, useEffect } from "react";
const Wrapper = styled.div`
  padding: 4em;
  color: #BF4F74;
  background: papayawhip;
`;
export const Counter2 = ({ className, name }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState("truong");
  
  useEffect(()=>{
    console.log('useEffect');
    setTimeout(()=>{setLoading("aaa")}, 3000);
  }, [loading, count]);
  const onDecrease = () => {
    setCount(count-1);
  }
  const onIncrease = () => {
    setCount(count+1);
  } 
  return (
    <Wrapper className={className}>
      <h1>Hello {name}</h1>
      <button className="count-button" onClick={onDecrease}>-</button>
      <span style={{marginLeft:30, marginRight:30}}>{count}</span>
      <button className="count-button" onClick={onIncrease}>+</button>
    </Wrapper>
  )
}