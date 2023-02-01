import React from 'react'
import "./Topbar.css"

function Topbar({menuBtn, setMenuBtn}) {
  const menu = ()=>{
    setMenuBtn((menuBtn)?false:true)
  }
  return (
    <div className='topbar' id='topbar' style={(!menuBtn)?{backgroundColor:"white"}:{backgroundColor:"royalblue", color:"white"}}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>LOGOOOO</a>

          <div className="itemContainer">
          <i  className="fa-solid fa-user"></i><span className='btnIcon'>8278615141</span>
          <i className="fa-solid fa-envelope"></i><span className='btnIcon'>amanprajapat08278@gmail.com</span>
         
          </div>
        </div>
        <div className="right">
          {(!menuBtn)?<i className="fa-solid fa-bars" onClick={menu}></i>: <i onClick={menu} className="fa-solid fa-xmark"></i>}
        </div>
      </div>
    </div>
  )
}

export default Topbar


