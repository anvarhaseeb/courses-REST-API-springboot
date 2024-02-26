import React, { Fragment } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";

const AddCourse = () => {
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form className="mx-auto" style={{ maxWidth: "500px" }}>
        <FormGroup>
          <Label for="userId" style={{ textAlign: "left" }}>Course Id</Label> 
          <Input
            type="text"
            placeholder="Enter Course id"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <Label for="title" style={{ textAlign: "left" }}>Course Title</Label> 
          <Input
            type="text"
            placeholder="Enter title"
            id="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" style={{ textAlign: "left" }}>Description</Label> 
          <textarea
            className="form-control"
            placeholder="Enter description"
            id="description"
            style={{ height: 300 }}
          />
        </FormGroup>
        <Container>
          <Button className="btn btn-success">Submit</Button>
          <Button className="btn btn-warning">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
