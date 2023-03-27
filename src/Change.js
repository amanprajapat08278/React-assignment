import React,{useState} from 'react'
import Num from './Comp/Num'

function Change() {

    let [data,setdata]=useState([])
    let [val,setval]=useState("")

    function add(){
        setdata([...data,val])
        setval("")
    }



  return (
    <div>
        <div className='data'> <Num arr={data} /></div>
        <input type="text" value={val} onChange={(e)=>setval(e.target.value)} />
        <button  onClick={add}>submit</button>
      
    </div>
  )
}

export default Change
