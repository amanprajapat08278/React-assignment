import React from 'react';
import './App.css';

function App() {
  
  
  const run = () =>{
    let value = document.getElementById("text").value
    let Upper = value.toUpperCase()
    document.getElementById("para").innerHTML = Upper
  }
  return (
    <>
      <div className="box">
        <h3 id="heading">Write Your Bio</h3>
        <textarea type="text" id="text" />
        <button id="btn" onClick={() => run()}>Upper Case</button>
        <span id="para"></span>
      </div>
    </>
  );
}

export default App;
