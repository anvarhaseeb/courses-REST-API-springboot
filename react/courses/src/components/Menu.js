import React from "react";
import { ListGroup } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
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
    <br/>
      <Link className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
        style={location.pathname === "/" ? activeStyle : inactiveStyle}
      >
        Home
      </Link>

      <Link className="list-group-item list-group-item-action"
        tag="a"
        to="/view-course"
        action
        style={
          location.pathname === "/view-course" ? activeStyle : inactiveStyle
        }
      >
        View Courses
      </Link>

      <Link className="list-group-item list-group-item-action"
        tag="a"
        to="/add-course"
        action
        style={
          location.pathname === "/add-course" ? activeStyle : inactiveStyle
        }
      >
        Add Courses
      </Link>

      <Link className="list-group-item list-group-item-action"
        tag="a"
        to="/contactus"   
        action
        style={location.pathname === "/contactus" ? activeStyle : inactiveStyle}
      >
        Contact Us
      </Link>
    </ListGroup>
  );
};

export default Menu;
