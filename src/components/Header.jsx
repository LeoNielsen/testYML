import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import facade from '../apiFacade';
import "../styles/Header.css"

const Header = ({ loggedIn, isAdmin, setLoggedIn }) => {
  
  function logout() {
    setLoggedIn(false)
    facade.logout();
  }
  
  return (
    <div>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          {
            loggedIn ?
              <NavLink className="nav-button" to="/" onClick={logout}>Logout</NavLink>
              :
              <NavLink className="nav-button" to="login">Login</NavLink>
          }
          {
            loggedIn && isAdmin &&
            <NavLink className="nav-link" to="/adminsite">admin</NavLink>
          }


        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Header