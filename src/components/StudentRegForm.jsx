import React, { useState } from 'react'

import './StudentRegForm.css'


function StudentRegForm() {
    const [usn,setUsn] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [sem,setSem] = useState("");
    const [branch,setBranch] = useState("");

    const HandleInput= (e)=>{
        e.preventDefault();
        const data={
            usn:usn,
            name:name,
            email:email,
            phone:phone,
            sem:sem,
            branch:branch,
        } ;
         console.log(data);
    
    };
    
    

  return (
    <div className="Reg">
        <h2>Student Registration Form</h2>
        <form onSubmit={HandleInput}>
          <div className="field">
          <label>USN</label>
            <input type="text" 
            placeholder="Enter your usn" 
            value={usn} 
            onChange={(e)=>setUsn(e.target.value)} 
            pattern="[0-4][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]"
            title="Pattern should be DAADDAADDD"
            required/>
          </div>
          <div className="field">
          <label>Name</label>
            <input type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            pattern="[a-zA-Z]+"
            title="No digits or special characters allowed"
            required/>
          </div>
          <div className="field">
          <label>Email</label>
            <input type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            pattern="[a-zA-Z0-9]+@gmail\.com"
            title="Enter proper email"
            required/>
          </div>
          <div className="field">
          <label>Mobile</label>
            <input type="text" 
            placeholder="Enter your phone number" 
            value={phone} 
            onChange={(e)=>setPhone(e.target.value)} 
            pattern="(\+91)?[0-9]{10}"
            title="No characters allowed"
            required/>
          </div>
          <div className="field">
          <label>Semester</label>
            <input type="text" 
            placeholder="Enter your sem" 
            value={sem} 
            onChange={(e)=>setSem(e.target.value)} 
            pattern="[1-8]"
            title="Enter proper semester"
            required/>
          </div>
          <div className="field">
          <label>Branch</label>
            <input type="text" 
            placeholder="Enter your branch" 
            value={branch} 
            onChange={(e)=>setBranch(e.target.value)} 
            pattern="[a-zA-Z]+"
            title="No digits or special characters allowed"
            required/>
          </div>
            
            
           
            
            
            
            <button>Submit</button>
            
        </form>
    </div>
  )
}

export default StudentRegForm;