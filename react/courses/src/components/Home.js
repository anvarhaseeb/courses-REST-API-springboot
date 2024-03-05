import React, { useEffect } from "react";
import {  Button } from "reactstrap";
import { ToastContainer ,toast} from 'react-toastify';

const Home = () => {
  useEffect(()=>{
    isTokenValid();
      
  })
  const token =  sessionStorage.getItem('token');
  const isTokenValid = ()=>{
    if(!token) {
      toast.error("Please login to do Crud Operarion.");
    }
   
  }
    const btnHandle =()=>{isTokenValid();
      if(!token) {
        toast.error("Please login to  do Crud Operarion.");
      }else{
        toast.success("You are  sucessfully enrolled!")
      }
      }
  return (
    <>
    <div className="container-fluid bg-light text-dark p-5">
    <div className="container bg-light p-5">
      <h1 className="display-3 ">Learn Course with us for free !</h1>
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