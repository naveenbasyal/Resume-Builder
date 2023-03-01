import React, { useState, useRef } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import "react-rangeslider/lib/index.css";
import "./ResumeBuilder.css";
import BasicInfo from "../components/BasicInfo";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Links from "../components/Links";
import Preview from "../components/Preview";

const ResumeBuilder = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [educationDetails, setEducationDetails] = useState([]);
  const [links, setLinks] = useState([]);
  const [image, setImage] = useState({});
  const [skillLevel_1, setSkillLevel_1] = useState(0);
  const [skillLevel_2, setSkillLevel_2] = useState(0);
  const [skillLevel_3, setSkillLevel_3] = useState(0);
  const [skill1, setSkill1] = useState();
  const [skill2, setSkill2] = useState();
  const [skill3, setSkill3] = useState();
  const [currentPage, setCurrentPage] = useState("preview");

  // --------------------Basic Info and Image----------------
  const handlePreviewDownload = () => {
    const element = document.getElementById("preview");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const handleBasicInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    setBasicInfo({
      fname: form.fname.value,
      lname: form.lname.value,
      profession: form.profession.value,
      city: form.city.value,
      country: form.country.value,
      pincode: form.pincode.value,
      phone: form.phone.value,
      email: form.email.value,
      about: form.about.value,
      image: image,
    });
    setCurrentPage("education");
  };

  // ----------------Education Section-------------
  const handleEducationDetailsSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setEducationDetails({
      schoolName: form.schoolName.value,
      schoolCourse: form.schoolCourse.value,
      school_startyear: form.school_startyear.value,
      school_endyear: form.school_endyear.value,
      collegeName: form.collegeName.value,
      collegeCourse: form.collegeCourse.value,
      startYear: form.startYear.value,
      endYear: form.endYear.value,
    });
    setCurrentPage("skills");
  };
  // ------------------Social Links--------------
  const handleLinks = (event) => {
    event.preventDefault();
    const form = event.target;
    setLinks({
      linkedin: form.linkedin.value,
      twitter: form.twitter.value,
      github: form.github.value,
      mail: form.mail.value,
    });
    setCurrentPage("preview");
  };

  // ------------------Skills--------------
  const handleSkillsSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!skillLevel_1) {
      return alert("Please set a value for Skill 1");
    }
    if (!skillLevel_2) {
      return alert("Please set a value for Skill 2");
    }
    if (!skillLevel_3) {
      return alert("Please set a value for Skill 3");
    }

    setCurrentPage("preview");
  };
  // -----------------------Handle Back Button-----------------
  const handleBackButton = () => {
    if (currentPage === "preview") {
      setCurrentPage("links");
    } else if (currentPage === "links") {
      setCurrentPage("skills");
    } else if (currentPage === "skills") {
      setCurrentPage("education");
    } else if (currentPage === "education") {
      setCurrentPage("basicInfo");
    }
  };

  return (
    <Container>
      {/* ------------------------------Basic Info------------------------------- */}
      {currentPage === "basicInfo" && (
        <BasicInfo handleBasicInfo={handleBasicInfo} setImage={setImage} />
      )}
      {/* ------------------------Education----------------- */}
      {currentPage === "education" && (
        <Education
          handleEducationDetailsSubmit={handleEducationDetailsSubmit}
          handleBackButton={handleBackButton}
        />
      )}
      {/* ---------------------Skills----------------- */}
      {currentPage === "skills" && (
        <Skills
          handleSkillsSubmit={handleSkillsSubmit}
          handleBackButton={handleBackButton}
          skillLevel_1={skillLevel_1}
          skillLevel_2={skillLevel_2}
          skillLevel_3={skillLevel_3}
          setSkillLevel_1={setSkillLevel_1}
          setSkillLevel_2={setSkillLevel_2}
          setSkillLevel_3={setSkillLevel_3}
          skill1={skill1}
          skill2={skill2}
          skill3={skill3}
          setSkill1={setSkill1}
          setSkill2={setSkill2}
          setSkill3={setSkill3}
        />
      )}
      {/* ---------------------Links------------------ */}
      {currentPage === "links" && (
        <Links handleLinks={handleLinks} handleBackButton={handleBackButton} />
      )}
      {/* ----------------------------------Preview----------------------------- */}

      {currentPage === "preview" && (
        <Preview
          basicInfo={basicInfo}
          educationDetails={educationDetails}
          links={links}
          skillLevel_1={skillLevel_1}
          skillLevel_2={skillLevel_2}
          skillLevel_3={skillLevel_3}
          skill1={skill1}
          skill2={skill2}
          skill3={skill3}
          handlePreviewDownload={handlePreviewDownload}
          handleBackButton={handleBackButton}
        />
      )}
    </Container>
  );
};

export default ResumeBuilder;
