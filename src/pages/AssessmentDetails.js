import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/assessmentDetails.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const AssessmentDetails = () => {
  const { id } = useParams();
  const assessments = JSON.parse(localStorage.getItem("assessments")) || [];
  const assessment = assessments.find(a => a.id === parseInt(id));

//   if (!assessment) {
//     return (
//       <div className={styles.container}>
//         <Sidebar />
//         <div className={styles.mainContent}>
//           <Topbar />
//           <h2>Assessment Not Found</h2>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Assessment Details</h2>
        <div className={styles.details}>
          <p><strong>Date:</strong> {assessment.date}</p>
          <p><strong>Teacher:</strong> {assessment.teacher}</p>
          <p><strong>Subject:</strong> {assessment.subject}</p>
          <p><strong>Topic:</strong> {assessment.topic}</p>
          <p><strong>Summary:</strong> {assessment.summary}</p>
          <p><strong>Status:</strong> {assessment.status}</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetails;
