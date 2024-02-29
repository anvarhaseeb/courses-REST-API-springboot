import axios from "axios";
import React, { Fragment, useState  } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import base_url from "../api/bootapi";
import {ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

  const [course,setCourse]= useState({});
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
  
    const regex = /^\d+$/;
  

    if (!regex.test(course.id)) {
      toast.error("Course ID must be a valid number");
      return; 
    }
    posttoServer(course);
  }
  const redirectToViewCourse=()=>{
    const handleForm = (e) => {
      e.preventDefault();
    
      const regex = /^\d+$/;
    
  
      if (!regex.test(course.id)) {
        toast.error("Course ID must be a valid number");
        return; 
      }
      posttoServer(course);
    
    }
  }
  


  const posttoServer=(data)=>{
    axios.post(`${base_url}/courses`,data, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnZhciIsImlhdCI6MTcwOTEwMjM3MSwiZXhwIjoxNzA5MjgyMzcxfQ.cfQstnlmyUhy1CoBLhLBJHR_7JlrJnhrr5NEedEEWhenAiUMxZJN4B3gwWcUp4ZH8_4PIvkcvdHJaM8viAg6pg'
      }
    }).then(
      (response)=>{
        console.log(response)
        toast.success("The Course has been added")
        navigate("/view-course");
      },
      (error)=>{
        toast.error("Oops !....Server down")
      }
    )
    
  }

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form className="mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId" style={{ textAlign: "left" }}>Course Id</Label> 
          <Input
            type="text"
            placeholder="Enter Course id"
            name="userId"
            id="userId"
            onChange={(e)=>{
              setCourse({...course,id:e.target.value})
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title" style={{ textAlign: "left" }}>Course Title</Label> 
          <Input
            type="text"
            placeholder="Enter title"
            id="title"
            onChange={(e)=>{
              setCourse({...course,title:e.target.value})
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" style={{ textAlign: "left" }}>Description</Label> 
          <textarea
            className="form-control"
            placeholder="Enter description"
            id="description"
            onChange={(e)=>{
              setCourse({...course,description:e.target.value})
            }}
            style={{ height: 300 }}
          />
        </FormGroup>
        <Container className="d-flex gap-3">
          <Button type="submit" className="btn btn-success">Save</Button>
          <Button type="submit" className="btn btn-success" onClick={redirectToViewCourse}>Save & Return</Button>
          
          <Button type="reset" className="btn btn-warning">
            Clear
          </Button>
        </Container>

      </Form>
      <ToastContainer/>
    </Fragment>
  );
};

export default AddCourse;
