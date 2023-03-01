import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";


const Links = ({handleLinks,handleBackButton}) => {
  return (
    <>
      {" "}
      <Row>
        <Col>
          <Form onSubmit={handleLinks}>
            <h1>Social Media Handles</h1>
            <Form.Group controlId="formSocialLinks">
              <Form.Label>LinkedIn</Form.Label>
              <input type="text" name="linkedin" />
            </Form.Group>
            <Form.Group controlId="formSocialLinks">
              <Form.Label>Twitter</Form.Label>
              <input type="text" name="twitter" />
            </Form.Group>
            <Form.Group controlId="formSocialLinks">
              <Form.Label>Github</Form.Label>
              <input type="text" name="github" />
            </Form.Group>
            <Form.Group controlId="formSocialLinks">
              <Form.Label>E-mail</Form.Label>
              <input type="email" name="mail" required />
            </Form.Group>
            <Button onClick={handleBackButton}>Previous</Button>

            <Button type="submit">Next</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Links;
