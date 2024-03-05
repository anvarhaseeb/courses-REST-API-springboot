import React, { useState ,useEffect } from 'react';
import Course from './Course';
import { Button } from 'reactstrap';

const AllCourse=()=>{

    useEffect(()=>{
        alert("Hello");
    },[])

    const [courses,setCourse] = useState([
        {title:"React Course",description:"it is react.js dom "},
        {title:"Laravel Course",description:"php,laravel framework "},
        {title:"Java Course",description:"It is java Course for beginners"}
    ])
    return(
        <>
        <Button onClick={()=>{
           
            setCourse(courses=>[...courses,
                {
                        title:"Angular Course",
                        description:"it is react.js dom "   
                }
            ]);
        }}
        >Test</Button>
            <h1>All courses</h1>
            <p>List of courses</p>
            {
                courses.length>0
                ? courses.map((item)=> (
                    <Course course={item} />
                )):"No Courses available"

            }
        </>
    )
}
export default AllCourse;