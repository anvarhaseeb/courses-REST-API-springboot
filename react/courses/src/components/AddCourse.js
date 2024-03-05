import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import base_url from "../api/bootapi";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({});
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate(); 
  
  useEffect(() => {
    redirectToViewCourse();
    isTokenValid();
  }, []);

  const isTokenValid = () => {
    if (!token) {
      toast.error("Please login to do Crud Operation.");
      toast.error("Token expired. Please log in again.");
    }
  }

  const redirectToViewCourse = () => {
    const handleForm = (e) => {
      e.preventDefault();
      const regex = /^\d+$/;
      if (!regex.test(course.id)) {
        isTokenValid();
        toast.error("Course ID must be a valid number");
        return;
      }
      posttoServer(course);
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    const regex = /^\d+$/;
    if (!regex.test(course.id)) {
      isTokenValid();
      toast.error("Course ID must be a valid number");
      return;
    }
    posttoServer(course);
  }

  const posttoServer = (data) => {
    axios.post(`${base_url}/courses`, data, {
      headers: {
        Authorization: `${token}`
      }
    }).then(
      (response) => {
        console.log(response)
        toast.success("The Course has been added")
        navigate("/view-course");
      }
    ).catch((error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        toast.error("Token expired. Please log in again.");
      } else {
        console.log(error);
        toast.error("Oops !....Server down")
      }
    });
  }

  return (
    <div>
      <h1>Add Course</h1>
      <Form className="mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">Course Id</Label>
          <Input
            type="text"
            placeholder="Enter Course id"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            placeholder="Enter title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <textarea
            className="form-control"
            placeholder="Enter description"
            id="description"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value })
            }}
            style={{ height: 300 }}
          />
        </FormGroup>
        <Button type="submit" color="primary">Save</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
