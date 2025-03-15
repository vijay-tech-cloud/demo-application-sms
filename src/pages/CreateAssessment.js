import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/createAssessment.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const CreateAssessment = () => {
  const navigate = useNavigate();

  // Sample Class Teachers Data
  const classTeachers = {
    "5A": "Mr. A",
    "5B": "Ms. B",
    "6A": "Mr. C",
    "6B": "Ms. D",
  };

  const [assessmentData, setAssessmentData] = useState({
    std: "",
    div: "",
    classTeacher: "",
    date: "",
    subject: "",
    topic: "",
    keyPoints: "",
    classActivity: "",
    homeworkDescription: "",
    submissionDeadline: "",
  });

  useEffect(() => {
    if (assessmentData.std && assessmentData.div) {
      const key = `${assessmentData.std}${assessmentData.div}`;
      setAssessmentData((prev) => ({
        ...prev,
        classTeacher: classTeachers[key] || "",
      }));
    }
  }, [assessmentData.std, assessmentData.div]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!assessmentData.std || !assessmentData.div || !assessmentData.date || !assessmentData.subject) {
      alert("Please fill in all required fields!");
      return;
    }

    // Retrieve existing assessments
    let existingAssessments = JSON.parse(localStorage.getItem("assessments")) || [];

    // Append new assessment
    const updatedAssessments = [...existingAssessments, assessmentData];

    // Save to local storage
    localStorage.setItem("assessments", JSON.stringify(updatedAssessments));

    // Redirect back to Assessment Main Page
    navigate("/classroom-assessment");
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Assessment Creation</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label>Standard</label>
            <select
              value={assessmentData.std}
              onChange={(e) => setAssessmentData({ ...assessmentData, std: e.target.value })}
            >
              <option value="">Select</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>

            <label>Division</label>
            <select
              value={assessmentData.div}
              onChange={(e) => setAssessmentData({ ...assessmentData, div: e.target.value })}
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <label>Class Teacher</label>
            <input type="text" value={assessmentData.classTeacher} readOnly />
          </div>

          <label>Date</label>
          <input
            type="date"
            value={assessmentData.date}
            onChange={(e) => setAssessmentData({ ...assessmentData, date: e.target.value })}
          />

          <label>Subject Covered</label>
          <select
            value={assessmentData.subject}
            onChange={(e) => setAssessmentData({ ...assessmentData, subject: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>

          <label>Topics/Chapters Covered</label>
          <input
            type="text"
            value={assessmentData.topic}
            onChange={(e) => setAssessmentData({ ...assessmentData, topic: e.target.value })}
            placeholder="Enter topics covered"
          />

          <label>Key Points or Summary</label>
          <textarea
            value={assessmentData.keyPoints}
            onChange={(e) => setAssessmentData({ ...assessmentData, keyPoints: e.target.value })}
            placeholder="Enter key points"
          ></textarea>

          <label>Class Activity</label>
          <input
            type="text"
            value={assessmentData.classActivity}
            onChange={(e) => setAssessmentData({ ...assessmentData, classActivity: e.target.value })}
            placeholder="Enter class activity"
          />

          <h3>Home Work</h3>
          <label>Homework Description</label>
          <textarea
            value={assessmentData.homeworkDescription}
            onChange={(e) => setAssessmentData({ ...assessmentData, homeworkDescription: e.target.value })}
            placeholder="Enter homework details"
          ></textarea>

          <label>Submission Deadline</label>
          <input
            type="date"
            value={assessmentData.submissionDeadline}
            onChange={(e) => setAssessmentData({ ...assessmentData, submissionDeadline: e.target.value })}
          />

          <button type="submit" className={styles.submitButton}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssessment;
