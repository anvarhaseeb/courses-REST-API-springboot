import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { FaBars, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function CustomNavbar({ toggleSidebar })  {
  const [isOpen, setIsOpen] = useState(false);
  const token = sessionStorage.getItem('token');
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white"  className='bg-light' expand="md" style={{height: '100px' }}>
      <a onClick={toggleSidebar}><FaBars /></a>

        <NavbarBrand href="/">
        <img
            src="https://discovernewlife.church/wp-content/uploads/2021/04/CMS_Logo_RGB-copy.png"
            height="20"
            alt="CMS Logo"
            loading="lazy"
            style={{ marginTop: '-3px' }}
          />
           <span style={{ marginLeft: '30px'    }}>Courses Management System</span>
      
        </NavbarBrand>
        <NavbarToggler onClick={toggle}><FaBars /></NavbarToggler>
       
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink href="#">Dashboard</NavLink>
            </NavItem> */}
          </Nav>
          <Nav className="d-flex align-items-center" navbar>
           
            <NavItem>
              <NavLink to="/aboutus" tag={Link}>Contact Us</NavLink>
            </NavItem>
          
            <NavItem>
            {token ? 
              <NavLink to="/login" tag={Link}>Logout   <FaUserPlus /></NavLink>
              :
              <NavLink to="/login" tag={Link}> Login  <FaUserPlus /></NavLink>}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;