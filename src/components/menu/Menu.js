import React from 'react'
import "./Menu.css"

function Menu({menuBtn, setMenuBtn}) {
  return (
    <div className='menu' style={(menuBtn)?{right:"0px"}:{right:"-200px"}}>
      <ul>
        <li><a href='#intro'>Home</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#works'>Works</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu
