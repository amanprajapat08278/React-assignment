import React from 'react'
import "./Portfolio.css"

function Portfolio() {
  return (
    <div id='skillsBigBox'>
      <div className='portfolio' id='portfolio'>
        <h2>Skills</h2>
      </div>
      <div id="skillsBox">
        <div className="skills">
          <ul>
            <li>Java Script</li>
            <li>Node js</li>
            <li>Express js</li>
          </ul>
        </div>
        <div className="skills">
          <ol>
            <li>Java Script</li>
            <li>Node js</li>
            <li>Express js</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
