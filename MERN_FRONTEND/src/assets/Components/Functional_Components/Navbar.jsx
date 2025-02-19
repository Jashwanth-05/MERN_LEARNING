import { Link } from "react-router-dom"
import "../../Styles/Navbar.css"
const Navbar = () => {
  return (
    <header>
        <nav >
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </nav>
    </header>

  )
}

export default Navbar;