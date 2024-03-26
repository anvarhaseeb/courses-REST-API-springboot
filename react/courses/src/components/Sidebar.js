import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"; // Import Sidebar.css for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  const activeStyle = {
    backgroundColor: "#14509E",
    color: "white"
  };

  const inactiveStyle = {
    backgroundColor: "#fff",
    color: "#000"
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <div className="sidebar-menu">
        <Link
          to="/"
          className={`sidebar-item ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/view-course"
          className={`sidebar-item ${location.pathname === "/view-course" ? "active" : ""}`}
        >
          View Courses
        </Link>
        <Link
          to="/add-course"
          className={`sidebar-item ${location.pathname === "/add-course" ? "active" : ""}`}
        >
          Add Courses
        </Link>
        <Link
          to="/aboutus"
          className={`sidebar-item ${location.pathname === "/aboutus" ? "active" : ""}`}
        >
          Contact Us
        </Link>
        <div className="sidebar-item">
          {token ? (
            <Link to="/login">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
