import React from 'react'
import Num from './Comp/Num';
import { useState } from 'react';

function Table() {
    let [nums,setnums]=useState([])
    let [val,setval]=useState("")
    
    function crtarr()
    {  let numarr=[]
      for(let i=1;i<=10;i++){
        numarr.push(i*val)
      }
    setnums(numarr)
    }
    
    
      return (
        <div className="App">
    
          <Num arr={nums} />
          <input type="text"  value={val}  onChange={(e)=>setval(e.target.value)}/>
          <button onClick={crtarr}>Get Table</button>
    
        </div>
      );
}

export default Table
