import { Link } from "react-router-dom"
import "../../Styles/Navbar.css"
const Navbar = () => {
  return (
    <header>
        <nav >
            <li><Link to='/home' className="nav-link">Home</Link></li>
            <li><Link to='/about' className="nav-link">About</Link></li>
            <li><Link to='/gallery' className="nav-link">Gallery</Link></li>
            <div>
              <li><span>Hooks</span></li>
              <ol>
                <li>
                  1.UseState
                </li>
                <li>
                  <Link to="/useeffect">2.UseEffect</Link>
                </li>
              </ol>
            </div>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/login' className="nav-link">Login</Link></li>
            <li><Link to='/signup' className="nav-link">Signup</Link></li>
        </nav>
    </header>

  )
}

export default Navbar;