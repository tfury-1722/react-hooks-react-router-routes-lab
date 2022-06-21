import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}
  return (
    <div className="navbar">
      <NavLink exact to={"/"}
       style={linkStyles}
        activeStyle={{
          background: "indigo"}}>
        Home
      </NavLink>
      <NavLink to={"/movies"} 
      style={linkStyles}
        activeStyle={{
          background: "indigo"}}>
        Movies
      </NavLink>
      <NavLink to={"/directors"} 
      style={linkStyles}
        activeStyle={{
          background: "indigo"}}>
        Directors
      </NavLink>
      <NavLink to={"/actors"} 
      style={linkStyles}
        activeStyle={{
          background: "indigo"}}>
        Actors
      </NavLink>
    </div>);
}

export default NavBar;
