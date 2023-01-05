import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="box">
        <h1 id="num">{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>Increse</button>
        <button className='btn' onClick={()=>setCount((count===0)?0:count-1)}>Decrese</button>
      </div>
    </>
  );
}

export default App;
