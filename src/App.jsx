import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeBuilder from "./ResumeBuilder/ResumeBuilder";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
          <Route path="*" element={<>404 Page not found</>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
