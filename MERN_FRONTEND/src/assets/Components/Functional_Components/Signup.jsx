import React from 'react'
import "../../Styles/Login.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
const Signup = () => {
    const navigate=useNavigate()
    const [form,SetForm]=useState({"firstName":"","lastName":"","userName":"","email":"","password":"",})

    const Changeinform=(e)=>{
      const df=e.target.name
      const ndata=e.target.value
      SetForm((odata)=>{
          return {...odata,[df]:ndata}
      })
    }

    const handleSignup =async(e)=>{
        e.preventDefault()
        const res=await axios.post("http://localhost:5555/signup",form)
        const {message,isSignup}=res.data
        if(isSignup){
          alert(message)
          navigate('/login')
        }else{
          alert(message)
        }
        
    }

  return (
    <div className="container">
      <form onSubmit={handleSignup} className="form-box">
        <label htmlFor="FirstName">FirstName:</label>
        <input type="text" id='FirstName' name='firstName' onChange={(e)=>Changeinform(e)}/>
        <label htmlFor="LastName">LastName:</label>
        <input type="text" id='LastName' name='lastName' onChange={(e)=>Changeinform(e)} />
        <label htmlFor="UserName">UserName:</label>
        <input type="text" id='UserName' name='userName' onChange={(e)=>Changeinform(e)} />
        <label htmlFor="Email">Email:</label>
        <input type="text" id='Email' name='email' onChange={(e)=>Changeinform(e)} />
        <label htmlFor="Password">Password:</label>
        <input type="text" id='Password' name='password' onChange={(e)=>Changeinform(e)} />
        <div style={{textAlign:"center"}}><button type='submit'>SignUp</button></div>
        <div style={{marginTop:"10px"}}><span>Old User?</span><Link to='/login'>Login</Link></div>
      </form>
    </div>
  )
}

export default Signup