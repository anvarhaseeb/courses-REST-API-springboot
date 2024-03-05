import React from "react";
import { ListGroup } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ token }) => {
  const location = useLocation();

  const activeStyle = {
    backgroundColor: "#14509E",
    color: "white"   
  };

  const inactiveStyle = {
    backgroundColor: "#fff", 
    color: "#000" 
  };

  return (
    <ListGroup>
      <br />
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
        style={location.pathname === "/" ? activeStyle : inactiveStyle}
      >
        Home
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/view-course"
        action
        style={location.pathname === "/view-course" ? activeStyle : inactiveStyle}
      >
        View Courses
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-course"
        action
        style={location.pathname === "/add-course" ? activeStyle : inactiveStyle}
      >
        Add Courses
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/aboutus"
        action
        style={location.pathname === "/aboutus" ? activeStyle : inactiveStyle}
      >
        Contact Us
      </Link>

      {token ? (
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/logout"
          action
          style={location.pathname === "/logout" ? activeStyle : inactiveStyle}
        >
          Logout
        </Link>
      ) : (
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/login"
          action
          style={location.pathname === "/login" ? activeStyle : inactiveStyle}
        >
          Login
        </Link>
      )}
    </ListGroup>
  );
};

export default Menu;
