
import React from "react";
import { Button } from 'reactstrap';

import { ToastContainer, toast } from "react-toastify";
const ContactUs=()=>{
    const btnHandles =()=>{
        toast.success("You  will recieve a mail!")
      }
return(
    <div>
    <div className="container-fluid bg-light text-dark p-5">
    <div className="container bg-light p-5">
      <h2 className="display-3 ">Lets Do it  . . . </h2>
      <h1 className="display-3 "> Click the button NOW !</h1>
      <hr/>
  
        <Button color="primary" outline onClick={btnHandles} className="me-3">Contact Us </Button>
        <Button color="danger" outline onClick={btnHandles}>Request for Demo </Button>
        <ToastContainer/> 
    </div>
  </div>
 
    </div>

)
}
export default ContactUs;   