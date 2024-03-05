import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Course = ({ course, update }) => {
  const token = localStorage.getItem('token');

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`, {
      headers: {
        Authorization: `${token}`
      }
    }).then(
      (response) => {
        toast.success("Course deleted");
        update(id);
      },
    ).catch((error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        toast.error("Token expired. Please log in again.");
      } else {
        console.log(error);
        toast.error("Server down");
      }
    });
  }

  return (
    <tr>
      <td className="fw-bold">{course.title}</td>
      <td>{course.description}</td>
      <td className="text-center">
        <FaTrash color="red" onClick={() => deleteCourse(course.id)}>
          Delete
        </FaTrash>
        <Link to={`/update-course/${course.id}`}>
          <FaEdit color="blue" className="btn btn-warning m-3">
            Update
          </FaEdit>
        </Link>
      </td>
    </tr>
  )
}

export default Course;
