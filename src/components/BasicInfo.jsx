import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";

const BasicInfo = ({handleBasicInfo,setImage}) => {
  return (
    <>
      
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="shadow-out p-5 col-lg-8">
          <div className="form-container">
            <Form onSubmit={handleBasicInfo}>
              <h1 className="textClip">Let’s start with your header</h1>
              <p className="fs-3">
                Include your full name and at least one way for employers to
                reach you.
              </p>
              <Form.Group controlId="formImage">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  className="shadow-out"
                  onChange={(event) =>
                    setImage(URL.createObjectURL(event.target.files[0]))
                  }
                />
              </Form.Group>
              <div className="form-inner-row">
                <Form.Group controlId="formName" className="me-2">
                  <Form.Label>FIRST NAME</Form.Label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control "
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="ms-2">
                  <Form.Label>SURNAME</Form.Label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control "
                    required
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formName">
                <Form.Label>PROFESSION</Form.Label>
                <input
                  type="text"
                  name="profession"
                  className="form-control "
                  required
                />
              </Form.Group>
              <div className="form-inner-row">
                <Form.Group controlId="formName" className="me-2">
                  <Form.Label>CITY</Form.Label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    required
                  />
                </Form.Group>
                <Form.Group
                  controlId="formName"
                  className="ms-2"
                  style={{ width: "30%" }}
                >
                  <Form.Label>PIN CODE</Form.Label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control "
                    required
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formName">
                <Form.Label>COUNTRY</Form.Label>
                <input
                  type="text"
                  name="country"
                  className="form-control "
                  required
                />
              </Form.Group>
              <div className="form-inner-row">
                <Form.Group controlId="formName" className="me-2">
                  <Form.Label>PHONE</Form.Label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control "
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="ms-2">
                  <Form.Label>E-MAIL</Form.Label>
                  <input
                    type="text"
                    name="email"
                    className="form-control "
                    required
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formName">
                <Form.Label>About</Form.Label>
                <input
                  type="text"
                  name="about"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Button type="submit" className="next-btn my-5 shadow-out">
                Next
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BasicInfo;
