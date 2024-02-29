import React, { useState ,useEffect } from 'react';
import Course from './Course';
import { Table} from 'reactstrap';
import base_url from '../api/bootapi';
import axios from "axios";
import { ToastContainer ,toast} from 'react-toastify';

const AllCourse=()=>{

    useEffect(()=>{
        getAllCoursesFromServer();
    },[])

    //function to call to server
    const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnZhciIsImlhdCI6MTcwOTEwMjM3MSwiZXhwIjoxNzA5MjgyMzcxfQ.cfQstnlmyUhy1CoBLhLBJHR_7JlrJnhrr5NEedEEWhenAiUMxZJN4B3gwWcUp4ZH8_4PIvkcvdHJaM8viAg6pg'
        }
    })
    .then(
        (response) => {
            console.log(response.data);
                   
            toast.success("All courses has been loaded",
           )
            setCourse(response.data);
        },
        (error) => {
            console.log(error);
            toast.error("server down")
        } 
    );
}

    //calling loading course function


    const [courses,setCourse] = useState([ ])
    
    const updateCourses=(id)=>{
        setCourse(courses.filter((c)=>c.id !==id));
    }

    return (
        <div>
          <h1 style={{ color: 'blue' }}>All Courses</h1>
          <p>List of courses</p>
          <ToastContainer />
          <Table striped bordered>
            <thead style={{ backgroundColor: 'blue', color: 'white' }}>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ?
                courses.map((course, index) => (
                  <Course key={index} course={course} update={updateCourses} />
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