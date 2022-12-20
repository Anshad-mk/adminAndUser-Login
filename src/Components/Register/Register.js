import React, { useState } from "react";
import axios from 'axios'
import './Register.css'
function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [email, setEmail] = useState('');
  function formhandle(e){
e.preventDefault()
   let data={
      name,
      email,
      phone,
      password
    }
  axios.post("http://192.168.38.140:5000/signup",data);

  }
  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <div>
          <form onSubmit={formhandle}>
            <div className="imgs">

            </div>

            <div>
              <h1>User Register</h1>
              <div>
                <input type="text" value={name} placeholder="Full Name" onChange={(e)=>setName(e.target.value)} className="name" />
                <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="name" />
                <input type="number" value={phone} placeholder="Phone" onChange={(e)=>setphone(e.target.value)} className="name" />
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="name" />
              </div>
              <div className="login-button">
                <button className="signup">Register</button>
              </div>
            </div>
            </form>
          </div>


        </div>
      </div>

    </div >
  )
}

export default Register


