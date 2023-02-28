import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';
import Menu from './components/menu/Menu';
import "./App.css"



function App() {
  let [menuBtn, setMenuBtn] = useState(false)


  return (
    <>
      <div className='app'>
        <Topbar menuBtn={menuBtn} setMenuBtn={setMenuBtn} />
        <Menu menuBtn={menuBtn} setMenuBtn={setMenuBtn} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>

      </div>
    </>
  );
}

export default App;
