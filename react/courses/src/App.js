
import './App.css';
 import Header from './components/Header';
 import { Button } from "reactstrap";


function App() {
  return (

    <div className="App">
    <Header  />
    <hr />
      <h1>This is my react app course</h1>
      <h1>This is my bootstrap component</h1>  
     <Button color="danger">React </Button>
    </div>
  );
}

export default App;
