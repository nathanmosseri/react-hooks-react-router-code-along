import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: 'inline-block',
  width: '55px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (
    <div>
      <NavLink
      to='/'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'red'
      }}
      >
        Home
      </NavLink>
      <NavLink
      to='/about'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'red'
      }}
      >
        About
      </NavLink>
      <NavLink
      to='/login'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'red'
      }}
      >
        Login
      </NavLink>
      <NavLink
      to='/signup'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'red'
      }}
      >
        Sign Up
      </NavLink>
      <NavLink
      to='/messages'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'red'
      }}
      >
        Messages
      </NavLink>
    </div>
  )
}

export default NavBar