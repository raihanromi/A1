import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/portfolio_react/" className="navbar-link" data-nav-link>
          About
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/portfolio_react/resume" className="navbar-link" data-nav-link>
          Resume
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/portfolio_react/project" className="navbar-link" data-nav-link>
          Project
        </NavLink>
      </li>

      {/* <li className="navbar-item">
        <NavLink to="/contact" className="navbar-link" data-nav-link>
          Contact
        </NavLink>
      </li> */}
    </ul>
  </nav>
  )
}

export default Navbar