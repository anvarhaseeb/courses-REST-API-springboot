import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button} from "reactstrap";
import base_url from "../api/bootapi";
import { Link } from 'react-router-dom';

 const Course=({course,update})=>{

      const deleteCourse=(id)=>{
            axios.delete(`${base_url}/courses/${id}`,
            {
                  headers: {
                      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnZhciIsImlhdCI6MTcwOTEwMjM3MSwiZXhwIjoxNzA5MjgyMzcxfQ.cfQstnlmyUhy1CoBLhLBJHR_7JlrJnhrr5NEedEEWhenAiUMxZJN4B3gwWcUp4ZH8_4PIvkcvdHJaM8viAg6pg'
                  }
              }
            ).then(
                  (response)=>{
                        toast.success("Course deleted");
                        update(id);
                  },
                  
                  (error)=>{
                        toast.error("Course not deleted !!,Server issue")
                  }
            )
      }
  return(
      <tr>
      <td className="fw-bold">{course.title}</td>
      <td>{course.description}</td>
      <td className="text-center">
        <Button color="danger" onClick={() => deleteCourse(course.id)}>
          Delete
        </Button>
        <Link to={`/update-course/${course.id}`} className="btn btn-warning m-3">
          Update
        </Link>
      </td>
    </tr>

  )
 }
 export default Course;