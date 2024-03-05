import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";


const Login =()=>{
  const navigate = useNavigate();
  useEffect(()=>{
    sessionStorage.removeItem('token');
},[])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = async(e)=>{
        e.preventDefault();
      try {
      const response = await axios.post('http://192.168.1.57:8080/auth/login', {
        username,
        password
      });

      const { jwtToken } = response.data;
      console.log(jwtToken);
      
    if (!jwtToken) {
      console.log("wrong password")
      toast.error("Incorrect username or password.");
    } else {
      toast.success("Successfully Logged In.");
      sessionStorage.setItem('token', `Bearer ${jwtToken}`);
      navigate('/');
    }
    } catch (error) {
      toast.error("Username and Password is incorrect ");
     
    }
  };
  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
        <CardBody>
            <CardTitle tag="h5" className="text-center">Login</CardTitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button type="submit" color="primary" block>Login</Button>
            </Form>
        </CardBody>
        <ToastContainer/>
    </Card>
   
);
};



export default Login;