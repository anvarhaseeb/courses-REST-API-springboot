
import './App.css';
 import Header from './components/Header';
 import { Button } from "reactstrap";

import Home from './components/Home'
import Course from './components/Course';
function App() {

  return (
    <div className="App">
    <Header  />     

    <Home/>
    <Course course={{title:"Java Course",description:"It is java Course for beginners"}}/>
    
 
    </div>
  );
}

export default App;
