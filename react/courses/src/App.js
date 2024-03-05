import './App.css';
import Header from './components/Header';
import { Row, Col } from "reactstrap";

import Home from './components/Home'
import AllCourse from './components/Allcourse';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';                     

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header/>     
        <Row>
          <Col md={4} style={{backgroundColor:"#F9F9F9"}}>
          
            <Menu/>
          </Col>
          <Col md={8} >
          <div  className="p-5">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/add-course' element={<AddCourse />} />
              <Route path='/view-course' element={<AllCourse />} />
            </Routes>
            </div>
          </Col>
        </Row>
      </Router>
    </div>
    </>
  );
}

export default App;
