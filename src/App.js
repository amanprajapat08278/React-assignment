import React, {useState} from 'react';
import "./App.css"


function App() {
  const [result, setResult] = useState("")
  const [name, setName] = useState("")
  const [loverName, setLoverName] = useState("")
  const [active, setActive] = useState(false)

  const run = () => {

    if (!active) {
      if (name === "") {
        alert("Please Enter Your Name");
      }
      else if (loverName === "") {
        alert("Please Enter Your Love Name");
      }
      else if (name.length < 3) {
        alert("Please Enter minimum 3 charactor of Name");
      }
      else if (loverName.length < 3) {
        alert("Please Enter minimum 3 charactor of Your Love Name");
      }
      else {
        let number = Math.random() * 100;
        number = Math.round(number);
        setResult(number + "%")
        setActive(true)
      }
      
    } else {
      setActive(false)
      setLoverName("")
      setName("")
      setResult("")
    }


  }
  return (
    <>
      <div className="box">
        <div className="heading">Love Calculator</div>
        <div id="fill">
          <input type="text" placeholder="Your Name" className="inputx" value={name} onChange={(e) => setName(e.target.value)} />💖
          <input type="text" placeholder="Lover Name" className="inputx" value={loverName} onChange={(e) => setLoverName(e.target.value)} />
        </div>
        <input type="submit" onClick={run} value={(active) ? "Clear" : "Click"} id="btn" />
        <br />
        <input type="text" placeholder="Love Percentage" className="inputx" value={result} />
        <p className="heading">God bless your Relationship</p>
      </div>
    </>
  )
}

export default App;
