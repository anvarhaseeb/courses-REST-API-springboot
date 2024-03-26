import React, { useState } from "react";
import './App.css';
import { Row, Col } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';                     
import Login from './components/Login';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AllCourse from './components/Allcourse';
import AddCourse from './components/AddCourse';
import ContactUs from './components/ContactUs';
import UpdateCourse from './components/UpdateCourse';
import Sidebar from './components/Sidebar'; // Import Sidebar component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const token = sessionStorage.getItem('token');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="App">
        <Router>
          <CustomNavbar toggleSidebar={toggleSidebar} />
          <Row>
            <Col md={3} style={{ backgroundColor:"#F9F9F9" }}>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 
            </Col>
            <Col md={9} className="main-content">
              <div className="p-5">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/add-course' element={<AddCourse />} />
                  <Route path='/view-course' element={<AllCourse />} />
                  <Route path='/aboutus' element={<ContactUs />} />
                  <Route path='/update-course/:id' element={<UpdateCourse />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </div>
            </Col>
          </Row>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
