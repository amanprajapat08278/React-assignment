import React, { useState } from 'react';
import './App.css';

function App() {

  let [fname, setfname] = useState("")
  let [lname, setlname] = useState("")
  let [mobile, setmobile] = useState("")
  let [country, setcountry] = useState("")
  const [error, setError] = useState("")
  const [error1, setError1] = useState("")
  const [error2, setError2] = useState("")
  const [error3, setError3] = useState("")

  const run = (e) => {
    e.preventDefault();
    let newContent = {}
    if (!fname) { return setError("first name is mendatory & valid") }
    else {
      setError("")
      newContent.firstName = fname
    }
    if (!lname) {return setError1("last name is mendatory & valid") }
    else {
      setError("")
      newContent.lastName = lname
    }
    if (!mobile) {return setError2("mobile nmber is mendatory & valid") }
    else {
      setError("")
      newContent.Mobile = mobile
    }
    if (!country) {return setError3("country is mendatory & valid") }
    else {
      setError("")
      newContent.Country = country
    }
    let check = document.getElementById("check").checked;
    let gender = document.getElementById("gneder").value
    newContent.gender = gender
    newContent.marketingEmails = check

    console.log(newContent)

    setcountry("")
    setfname("")
    setlname("")




  };
  function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
      document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
  }
  return (
    <>
      <form className="box" onSubmit={run}>



        <div className="smallBox" id='imgBox'>
          <img id="uploadPreview" alt='No Profile' />
          <span className='atr' id='profile'>Profile</span>
          <input className="inputs" id="uploadImage" type="file" accept='Image' onChange={PreviewImage} />
          {/* {error}  */}
        </div>

        <div className="smallBox" onSubmit={run}>
          <span className='atr'>First Name</span>
          <input className="inputs" id="fname" type="text" placeholder="Write your first name" name='fname' value={fname} onChange={(e) => setfname(e.target.value)} />
          {error}
        </div>

        <div className="smallBox">
          <span className='atr'>Last Name</span>
          <input className="inputs" id="lname" type="text" placeholder="Write your last name" name='fname' value={lname} onChange={(e) => setlname(e.target.value)} />
          {error1}
        </div>

        <div className="smallBox">
          <span className='atr'>Mobile</span>
          <input className="inputs" id="mobile" type="number" placeholder="Write your mobile number" value={mobile} onChange={(e) => setmobile(e.target.value)} />
          {error2}
        </div>

        <div className="smallBox">
          <span className='atr'>Country</span>
          <input className="inputs" id="country" type="text" placeholder="Write your country" value={country} onChange={(e) => setcountry(e.target.value)} />
          {error3}
        </div>



        <div className="genBox">
          <span className='atr'>Gender : </span>
          <select id='gneder'>
            <option className='gen' value="male">Male</option>
            <option className='gen' value="female">Female</option>
            <option className='gen' value="others">Others</option>
          </select>
        </div>

        <div id="checkBox">
          <input id='check' type="checkbox"></input>
          <span className='atr'>Marketing emails</span>
        </div>

        <button id="btn" type='submit'>Submit</button>

      </form>
    </>
  );
}

export default App;