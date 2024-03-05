
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
      <h1 className="display-3 ">This is a course management app !</h1>
      <hr/>
  
        <Button color="primary" outline onClick={btnHandles}>Contact Us </Button>
        <ToastContainer/> 
    </div>
  </div>
 
    </div>

)
}
export default ContactUs;   