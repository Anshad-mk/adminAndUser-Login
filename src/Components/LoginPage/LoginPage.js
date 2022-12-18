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
             
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
           
           
 
         </div>
       </div>
       

     </div>
    </div>
  )
}

export default LoginPage
