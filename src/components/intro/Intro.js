import React from 'react'
import "./Intro.css"
import myImage from "../../Pics/my.png"

function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="leftIntro">
        <div className="welcome">
          <span id='hii'>Hi There, I'm</span>
          <span id='name'>Aman Prajapat</span>
          <span id='what'>Web Developer</span>
        </div>

      </div>
      <div className="rightIntro"><img src={myImage} id="myImage" alt='error' /></div>
    </div>
  )
}

export default Intro
