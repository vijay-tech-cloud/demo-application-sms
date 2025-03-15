import React, { useState } from "react";
import styles from "../styles/dashboard.module.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/sspd.png";
import examtimetable from "../assets/images/Icons/ExamManagement/Timetable.svg";
import questionPaper from "../assets/images/Icons/ExamManagement/Questionpaper.svg";
import block from "../assets/images/Icons/ExamManagement/ExamBlocks.svg";
import supervisor from "../assets/images/Icons/ExamManagement/SupervisorAllotment.svg";
import paperscheck from "../assets/images/Icons/ExamManagement/PaperRe-checking.svg";
import rechecking from "../assets/images/Icons/ExamManagement/PaperRe-checking.svg";
import reportcard from "../assets/images/Icons/ExamManagement/ReportCard.svg";

const menuItems = [
  { name: "Timetable", icon: examtimetable, path: "/create-timetable" },
  { name: "Question Paper", icon: questionPaper, path: "/question-papers" },
  { name: "Exam Blocks", icon: block, path: "/exam-blocks" },
  { name: "Supervisor Allotment ", icon: supervisor, path: "/supervisor-allotment" },
  { name: "Paper Checking", icon: paperscheck, path: "/paper-check" },
  { name: "Paper Rechecking", icon: rechecking, path: "/papers-recheck" },
  { name: "Report Card", icon: reportcard, path: "/report-card" },
];

const Examsidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <Link to="/dashboard" className={styles.logoLink}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="SSPD SMS Logo" className={styles.logo} />
          <h2 className={styles.sidebarTitle}>SSPD SMS</h2>
        </div>
      </Link>


         {/* Sidebar Menu */}
         <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Link to={item.path} className={styles.menuLink}>
              <img src={item.icon} alt={item.name} className={styles.menuIcon} />
              <span className={styles.menuText}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Examsidebar;
