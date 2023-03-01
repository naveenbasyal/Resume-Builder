import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import Rangeslider from "react-rangeslider/lib/Rangeslider.js";

const Skills = ({
  handleSkillsSubmit,
  handleBackButton,
  skillLevel_1,
  skillLevel_2,
  skillLevel_3,
  setSkill1,
  setSkill2,
  setSkill3,
  setSkillLevel_1,
  setSkillLevel_2,
  setSkillLevel_3,
}) => {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center mt-5">
        <Col className="shadow-out col-lg-8 p-5">
          <Form onSubmit={handleSkillsSubmit}>
            <h1 className="textClip ">Now, Mention Your Skills</h1>
            <Form.Group controlId="formSkill">
              <Form.Label>Skill 1</Form.Label>
              <input
                type="text"
                name="skill1"
                className="form-control "
                onChange={(e) => setSkill1(e.target.value)}
                required
              />
              <Form.Label>
                Skill Level :&nbsp;
                {skillLevel_1 == 0
                  ? "Make a choice"
                  : skillLevel_1 <= 20
                  ? "Beginner"
                  : skillLevel_1 > 20 && skillLevel_1 <= 40
                  ? "Intermediate"
                  : skillLevel_1 > 40 && skillLevel_1 <= 60
                  ? "Good"
                  : skillLevel_1 > 60 && skillLevel_1 <= 80
                  ? "Very Good"
                  : "Experienced"}
              </Form.Label>
              <Rangeslider
                min={0}
                max={100}
                value={skillLevel_1}
                onChange={(e) => setSkillLevel_1(e)}
              />

              <Form.Label>Skill 2</Form.Label>
              <input
                type="text"
                name="skill2"
                className="form-control "
                onChange={(e) => setSkill2(e.target.value)}
                required
              />
              <Form.Label>
                Skill Level :&nbsp;
                {skillLevel_2 == 0
                  ? "Make a choice"
                  : skillLevel_2 <= 20
                  ? "Beginner"
                  : skillLevel_2 > 20 && skillLevel_2 <= 40
                  ? "Intermediate"
                  : skillLevel_2 > 40 && skillLevel_2 <= 60
                  ? "Good"
                  : skillLevel_2 > 60 && skillLevel_2 <= 80
                  ? "Very Good"
                  : "Experienced"}
              </Form.Label>
              <Rangeslider
                min={0}
                max={100}
                value={skillLevel_2}
                onChange={(e) => setSkillLevel_2(e)}
              />
              <Form.Label>Skill 3</Form.Label>
              <input
                type="text"
                name="skill3"
                className="form-control "
                onChange={(e) => setSkill3(e.target.value)}
                required
              />
              <Form.Label>
                Skill Level :&nbsp;
                {skillLevel_3 == 0
                  ? "Make a choice"
                  : skillLevel_3 <= 20
                  ? "Beginner"
                  : skillLevel_3 > 20 && skillLevel_3 <= 40
                  ? "Intermediate"
                  : skillLevel_3 > 40 && skillLevel_3 <= 60
                  ? "Good"
                  : skillLevel_3 > 60 && skillLevel_3 <= 80
                  ? "Very Good"
                  : "Experienced"}
              </Form.Label>
              <Rangeslider
                min={0}
                max={100}
                value={skillLevel_3}
                onChange={(e) => setSkillLevel_3(e)}
              />
            </Form.Group>
            <span className="fs-4 text-grey" muted>
              More Skills ? Combine them !!
            </span>
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
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Skills;
