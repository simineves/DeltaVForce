import { NavLink } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink className="nav-item nav-brand" to="/">
          DeltaVForce
        </NavLink>
        <div className="nav-items">
          <NavLink className="nav-item nav-link" to="/details">
            How to play
          </NavLink>
          <NavLink className="nav-item nav-link" to="/auth">
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
