import "../../Styles/Login.css"
import { Link } from "react-router-dom"
import { use, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate=useNavigate()
  const [form,setForm]=useState({"userName":"","password":""})
  const HandleFunction=(e)=>{
    const name=e.target.name
    const ndata=e.target.value
    setForm((odata)=>{
      return {...odata,[name]:ndata}
    })
    console.log(form)
  }

  const HandleSubmit =async(event)=>{
      event.preventDefault()
      try {
        const res = await axios.post(
          "https://personal-budget-manager-rk3a.onrender.com/login",
          form
        );
        const { message, isLogin } = res.data;
        if (isLogin) {
          alert(message);
          navigate('/home');
        } 
      } catch (error) {
        console.error("Login Request Failed:", error);
        alert(error.response.data.message);
      }

  }
  return (
    <div className="container">
      <form onSubmit={HandleSubmit} className="form-box">
        <label htmlFor="UserName">UserName:</label>
        <input type="text" id='UserName' name="userName" value={form.userName} onChange={(e)=>{HandleFunction(e)}}/>
        <label htmlFor="Password">Password:</label>
        <input type="text" id='Password'name="password" value={form.password} onChange={(e)=>{HandleFunction(e)}}/>
        <div style={{textAlign:"center"}}><button type="submit">Login</button></div>
        <div style={{marginTop:"10px"}}><span>New User?</span><Link to='/signup'>Signup</Link></div>
      </form>
    </div>
  )
}

export default Login