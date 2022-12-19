import React,{useReducer} from 'react'
import './LoginPage.css'

function LoginPage() {
    useReducer()
  return (
    <div className="main">
     <div className="sub-main">
       <div>
        <div className="imgs">
           <div className="container-image">
             
           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             
             <input type="email" placeholder="Email" className="name"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
           
          <div className="login-button">
          <button className='signin'>Login</button>
          </div>
           
           
           
 
         </div>
       </div>
       

     </div>
    </div>
  )
}

export default LoginPage
