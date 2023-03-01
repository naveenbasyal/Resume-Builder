import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";

const Education = ({handleEducationDetailsSubmit,handleBackButton}) => {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center my-5">
        <Col className="shadow-out p-5 col-lg-8">
          <Form onSubmit={handleEducationDetailsSubmit}>
            <h1 className="textClip">Tell us about your education</h1>
            <p className="fs-3 ">
              Tell us about any colleges, vocational programs, or training
              courses you took. Even if you didn’t finish, it’s important to
              list them.
            </p>
            <Form.Group controlId="formDegree">
              <Form.Label>School Name </Form.Label>
              <input
                type="text"
                name="schoolName"
                className="form-control "
                required
              />
            </Form.Group>
            <Form.Group controlId="formDegree">
              <Form.Label>School Course </Form.Label>
              <input
                type="text"
                name="schoolCourse"
                className="form-control "
                required
                placeholder="ex:- NonMedical, Medical, Commerce, Arts etc."
              />
            </Form.Group>
            <Form.Group controlId="formDegree">
              <Form.Label>School Start Year</Form.Label>
              <input
                type="text"
                name="school_startyear"
                className="form-control "
                required
              />
            </Form.Group>
            <Form.Group controlId="formDegree">
              <Form.Label>School End Year</Form.Label>
              <input
                type="text"
                name="school_endyear"
                className="form-control "
                required
              />
            </Form.Group>
            <Form.Group controlId="formDegree">
              <Form.Label>College Name</Form.Label>
              <input
                type="text"
                name="collegeName"
                className="form-control "
                required
              />
            </Form.Group>
            <Form.Group controlId="formCollege">
              <Form.Label>College Course</Form.Label>
              <input
                type="text"
                name="collegeCourse"
                className="form-control "
                required
                placeholder="ex:- B.Tech , BCA, B.com etc."
              />
            </Form.Group>
            <Form.Group controlId="formStartYear">
              <Form.Label>College Start Year</Form.Label>
              <input
                type="number"
                name="startYear"
                className="form-control "
                required
              />
            </Form.Group>
            <Form.Group controlId="formEndYear">
              <Form.Label>College End Year</Form.Label>
              <input
                type="number"
                name="endYear"
                className="form-control "
                required
              />
              <div className="buttonWrap my-3 d-flex">
                <Button
                  className="next-btn mx-3  shadow-out"
                  onClick={handleBackButton}
                >
                  Previous
                </Button>
                <Button type="submit" className="next-btn mx-3 shadow-out">
                  Next
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Education;
