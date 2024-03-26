import React, { useEffect } from "react";
import {  Button } from "reactstrap";
import { ToastContainer ,toast} from 'react-toastify';
// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });  

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
        toast.success("You are sucessfully enrolled!")
      }
      }
  return (
    <>
  <div 
      className="container-fluid text-white p-5 " 
      style={{ backgroundImage: "url('https://www.webcapz.com.ng/wp-content/uploads/2023/04/bg-pheader.jpg')" }}
    >
      <div className="row">
        <div className="col">
          <h1 className="display-3">COURSE MANAGEMENT SYSTEM</h1>
          <p>This is the management system where we can do crud operation on the app</p>
          <Button color="primary" outline onClick={btnHandle}>click here</Button>
          <ToastContainer />
        </div>
      </div>
    </div>
    <div className="container-fluid bg-light text-dark p-5">
    <div className="container bg-light p-5 text-end">
    <div class="d-flex justify-content-center align-items-center mt-3">
        <img height="500" width="500" class="d-none d-md-block" 
        src="https://www.tiksom.com/assets/build-n-scale-image-40c3ee891de933b0f25d87395d939e851ed4d70da3d9dc0112a191ae6d5a6890.png" />
      
      <h1 className="display-3 ">Learn Course with us for free !</h1>
        </div>
    </div>
  </div>


    </>
  );
};

export default Home;