import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { ToastContainer ,toast} from 'react-toastify';

const Home = () => {
    const btnHandle =()=>{
        toast.success("You are  sucessfully enrolled!")
      }
  return (
    <>
    <div class="container-fluid bg-light text-dark p-5">
    <div class="container bg-light p-5">
      <h1 class="display-3 ">Learn Course with us for free !</h1>
      <hr/>
        <p>This is the management system where we can do crud operation on the app</p>
        <Button color="primary" outline onClick={btnHandle}>click here  </Button>
        <ToastContainer/> 
    </div>
  </div>
    </>
  );
};

export default Home;
