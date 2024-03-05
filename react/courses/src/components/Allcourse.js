import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Table } from "reactstrap";
import Course from "./Course";
import base_url from "../api/bootapi";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`, {
      headers: {
        Authorization: `${token}`
      }
    }).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
      }
    ).catch((error) => {
      if (error.response && error.response.status === 401) {
        toast.error("Token expired. Please log in again.");
      } else {
        console.log(error);
        toast.error("Server down");
      }
    });
  }

  return (
    <div>
      <h1 style={{ color: 'blue' }}>All Courses</h1>
      <p>List of courses</p>
      <ToastContainer />
      <Table striped bordered>
        <thead style={{ backgroundColor: 'blue', color: 'white' }}>
          <tr>
            <th  style={{ background: 'rgb(20, 80, 158)' }} className="text-white">Title</th>
            <th  style={{ background: 'rgb(20, 80, 158)' }} className="text-white">Description</th>
            <th  style={{ background: 'rgb(20, 80, 158)' }} className="text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ?
            courses.map((course, index) => (
              <Course key={index} course={course} update={getAllCoursesFromServer} />
            )) :
            <tr>
              <td colSpan="3">No Courses available</td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  );
}

export default AllCourse;
