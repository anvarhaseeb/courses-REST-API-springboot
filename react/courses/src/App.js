import './App.css';
import Header from './components/Header';
import { Row, Col } from "reactstrap";

import Home from './components/Home'
import AllCourse from './components/Allcourse';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';                     
import UpdateCourse from './components/UpdateCourse';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>     
        <Row>
          <Col md={3} style={{backgroundColor:"#F9F9F9"}}>
            <Menu/>
          </Col>
          <Col md={9} className="main-content">
            <div className="p-5">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-course' element={<AllCourse />} />
                <Route path='/update-course/:id' element={<UpdateCourse />} />
                <Route path='/contactus' element={<ContactUs/>}/>
              </Routes>
            </div>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
