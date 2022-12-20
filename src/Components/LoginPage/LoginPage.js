import React, { useState } from 'react'
import './LoginPage.css'
import axios from 'axios'

function LoginPage() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

function loghandle(e){
  e.preventDefault()
  let userDate={
    email,
    password
  }
  axios.post("http://192.168.38.140:5000/login",userDate).then((result) => {
    console.log(result.data)
    // localStorage.setItem('login',JSON.stringify({
    //   login:true,
    //   token:result.token 
    // }))
  }).catch((err) => {
    
  });

}

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">

            </div>


          </div>
          <form onSubmit={loghandle}>
          <div>
            <h1>Login Page</h1>
            <div>

              <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="name" />
              <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="name" />
            </div>

            <div className="login-button">
              <button type='submit' className='signin signup'>Login</button>
            </div>
          </div>
          </form>
        </div>


      </div>
    </div>
  )
}

export default LoginPage
