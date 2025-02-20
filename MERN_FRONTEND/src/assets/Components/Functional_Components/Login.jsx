import "../../Styles/Login.css"
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className="container">
      <form action="" className="form-box">
        <label htmlFor="UserName">UserName:</label>
        <input type="text" id='UserName'/>
        <label htmlFor="Email">Email:</label>
        <input type="text" id='Password'/>
        <div style={{textAlign:"center"}}><button>Login</button></div>
        <div style={{marginTop:"10px"}}><span>New User?</span><Link to='/signup'>Signup</Link></div>
      </form>
    </div>
  )
}

export default Login