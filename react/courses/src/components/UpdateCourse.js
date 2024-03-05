import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate  = useNavigate ();
  const token =  sessionStorage.getItem('token');
  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: ""
  });
  

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = (id) => {
    axios.get(`${base_url}/courses/${id}`, {
      headers: {
        Authorization: `${token}`      }
    })
    .then(response => {
      const { id, title, description } = response.data;
      setCourse({ id, title, description });
      toast.success("Course viewed");
    }).catch((error) => {
      if (error.response && error.response.status === 401) {

        sessionStorage.removeItem('token');
          toast.error("Token expired. Please log in again.");
       
      } else {
          console.log(error);
          console.error("Error fetching course:", error);
          toast.error("Failed to fetch course");
      }
  });

  };


  const handleForm = (e) => {
    e.preventDefault();

    axios.put(`${base_url}/courses/${course.id}`, course, {
      headers: {
        Authorization: `${token}`     }
    })
    .then(response => {
      console.log("Course updated:", response.data);
      toast.success("Course updated successfully");
      navigate("/view-course");
    })
    .catch(error => {
      console.error("Error updating course:", error);
      toast.error("Failed to update course");
      navigate("/")
    });
  };
  
   
   
  
  return (
    <div>
      <h2>Update Course</h2>
     
      <Form className="mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId" style={{ textAlign: "left" }}>Course Id</Label>
          <Input
            type="text"
            placeholder="Enter Course id"
            name="userId"
            id="userId"
            value={course.id}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="title" style={{ textAlign: "left" }}>Course Title</Label>
          <Input
            type="text"
            placeholder="Enter title"
            id="title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" style={{ textAlign: "left" }}>Description</Label>
          <textarea
            className="form-control"
            placeholder="Enter description"
            id="description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            style={{ height: 300 }}
          />
        </FormGroup>
        <Container className="d-flex gap-3">
          <Button type="submit" className="btn btn-success">Submit</Button>
          <Button type="reset" className="btn btn-warning">Clear</Button>
        </Container>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default UpdateCourse;
