import React from 'react'
import "./App.css"
import { increment, decrement } from './actions'
import { useSelector, useDispatch } from "react-redux"


function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className="box1">
        <h1 id="num">{myState}</h1>
        <button className='btn' onClick={() => dispatch(increment())} >Increse</button>
        <button className='btn' onClick={() => dispatch(decrement())} >Decrese</button>
      </div>

    </>
  )
}

export default App
