import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/assessmentList.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const AssessmentList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  // Sample Mock Data
  const assessments = JSON.parse(localStorage.getItem("assessments")) || [
    { id: 1, subject: "Math", topic: "Algebra", teacher: "Mr. A", status: "Submitted" },
    { id: 2, subject: "Science", topic: "Physics", teacher: "Ms. B", status: "Not Submitted" },
    { id: 3, subject: "English", topic: "Grammar", teacher: "Mr. C", status: "Submitted" },
  ];

  const filteredAssessments = filter === "All" ? assessments : assessments.filter(a => a.status === filter);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.headerSection}>
          <h2>Assessment</h2>
          <button className={styles.addButton} onClick={() => navigate("/classroom-assessment/create")}>Add</button>
        </div>

        <div className={styles.filters}>
          <button onClick={() => setFilter("All")} className={filter === "All" ? styles.active : ""}>All</button>
          <button onClick={() => setFilter("Submitted")} className={filter === "Submitted" ? styles.active : ""}>Submitted</button>
          <button onClick={() => setFilter("Not Submitted")} className={filter === "Not Submitted" ? styles.active : ""}>Not Submitted</button>
        </div>

        <div className={styles.assessmentList}>
          {filteredAssessments.map((assessment, index) => (
            <div key={index} className={styles.assessmentItem} onClick={() => navigate(`/classroom-assessment/${assessment.id}`)}>
              <h3>{assessment.subject} - {assessment.topic}</h3>
              <p>Lecture by: {assessment.teacher}</p>
              <p>Status: {assessment.status}</p>
              <button className={styles.viewButton}>View Assessment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentList;
