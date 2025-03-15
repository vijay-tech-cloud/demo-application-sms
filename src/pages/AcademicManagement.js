import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/academicManagement.module.css";

const standards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AcademicManagement = () => {
  const navigate = useNavigate();

  const handleStandardClick = (standard) => {
    navigate(`/syllabus/${standard}`);
  };

  return (
    <div className={styles.classroomContainer}>
       <Sidebar />
       <Topbar />
      <h2 className={styles.pageTitle}>Academic Management</h2>
      <h3 className={styles.sectionTitle}>Standards</h3>

      <div className={styles.gridContainer}>
        {standards.map((standard) => (
          <button
            key={standard}
            className={styles.standardBox}
            onClick={() => handleStandardClick(standard)}
          >
            {standard}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AcademicManagement;
