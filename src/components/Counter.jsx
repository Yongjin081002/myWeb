import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Counter = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  return (
    <div>
      <Header/>
      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(0)}>reset</button>
      
    </div>
    
  )
}

export default Counter

