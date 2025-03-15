import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import logo from "../assets/images/sspd.png";
import standardIcon from "../assets/images/Icons/Academic/Standard.svg";
import syllabus from "../assets/images/Icons/Academic/SylabusTracker.svg";
import attendance from "../assets/images/Icons/Academic/Attendence.svg";
import teacheralloted from "../assets/images/Icons/Academic/Teacher.svg";
import academictimetable from "../assets/images/Icons/Academic/Timetable.svg";
import Events from "../assets/images/Icons/Academic/Events.svg";

const menuItems = [
  { name: "Standard", icon: standardIcon, path: "/academic-management" },
  { name: "Syllabus", icon: syllabus, path: "/syllabus" },
  { name: "Attendance ", icon: attendance, path: "/student-attendance" },
  { name: "Teacher Alloted", icon: teacheralloted, path: "/teachers-allocation" },
  { name: "Timetable", icon: academictimetable, path: "/academic-timetable" },
  { name: "Events", icon: Events, path: "/academic-events" }
];

const Staffsidebar = () => {
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
};

export default Staffsidebar;
