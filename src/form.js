import React,{useState} from 'react'

function Form() {
    const [name,setname]=useState("")
    const [mobile,setmobile]=useState("")
    const [pincode,setpincode]=useState("")
    const [address,setaddress]=useState("")

    function submit(){
       let obj={
            name:name,
            mobile:mobile,
            pincode:pincode,
            address:address
        }
        console.log(obj);
    }

  return (
    <div>

        <input type="text" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" placeholder='mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)} />
        <input type="text" placeholder='pincode' value={pincode} onChange={(e)=>setpincode(e.target.value)} />
        <input type="text" placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)} />

        <button onClick={submit}>submit</button>
      
    </div>
  )
}

export default Form
