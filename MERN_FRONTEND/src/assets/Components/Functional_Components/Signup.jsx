import React from 'react'
import "../../Styles/Login.css"
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="container">
      <form action="" className="form-box">
        <label htmlFor="UserName">UserName:</label>
        <input type="text" id='UserName'/>
        <label htmlFor="Email">Email:</label>
        <input type="text" id='Email'/>
        <label htmlFor="Password">Password:</label>
        <input type="text" id='Password'/>
        <div style={{textAlign:"center"}}><button>SignUp</button></div>
        <div style={{marginTop:"10px"}}><span>Old User?</span><Link to='/login'>Login</Link></div>
      </form>
    </div>
  )
}

export default Signup