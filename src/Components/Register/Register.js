import React from "react";
import './Register.css'

function Register(){
    return(
      <div>
        <div className="main">
     <div className="sub-main">
       <div>
        <div className="imgs">
           
         </div>
         <div>
           <h1>User Register</h1>
           <div>
             
             <input type="text" placeholder="Full Name" className="name"/>
             <input type="email" placeholder="Email" className="name"/>
             <input type="number" placeholder="Phone" className="name"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button className="signup">Register</button>
          </div>
           
           
           
 
         </div>
       </div>
       

     </div>
    </div>

      </div>  
    )
}

export default Register


