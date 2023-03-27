import React,{useState} from 'react'
import Num from './Comp/Num'

function Buttn() {

    const [data,setdata]=useState([])

    function funa(){
        let date=new Date
        let val=`button a clicked on ${date}`
        setdata([...data,val])
        
    }

    function funa(){
        let date=new Date
        let val=`button a clicked on ${date}`
        setdata([...data,val])
        
    }

    function funb(){
        let date=new Date
        let val=`button b clicked on ${date}`
        setdata([...data,val])
        
    }

    function func(){
        let date=new Date
        let val=`button c clicked on ${date}`
        setdata([...data,val])
        
    }

    function fund(){
        let date=new Date
        let val=`button d clicked on ${date}`
        setdata([...data,val])
        
    }



  return (
    <div>
    <div className='data'> <Num arr={data} /></div>
      <button onClick={funa}>A</button>
      <button  onClick={funb}> B</button>
      <button onClick={func}>C</button>
      <button onClick={fund}>D</button>
    </div>
  )
}

export default Buttn
