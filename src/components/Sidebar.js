import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import logo from "../assets/images/sspd.png";
import studentIcon from "../assets/images/Icons/LeftPanel/Student.svg";
import staffIcon from "../assets/images/Icons/LeftPanel/Staff.svg";
import classroomIcon from "../assets/images/Icons/LeftPanel/Classroom.svg";
import academicIcon from "../assets/images/Icons/LeftPanel/Academic.svg";
import feesIcon from "../assets/images/Icons/LeftPanel/Fees.svg";
import examIcon from "../assets/images/Icons/LeftPanel/Exam.svg";
import eventIcon from "../assets/images/Icons/LeftPanel/Event.svg";
import transportIcon from "../assets/images/Icons/LeftPanel/Transport.svg";
import inventoryIcon from "../assets/images/Icons/LeftPanel/Inventory.svg";

const menuItems = [
  { name: "Student Management", icon: studentIcon, path: "/students" },
  { name: "Staff Management", icon: staffIcon, path: "/staff" },
  { name: "Classroom Management", icon: classroomIcon, path: "/classroom" },
  { name: "Academic Management", icon: academicIcon, path: "/academic-management" },
  { name: "Fees Management", icon: feesIcon, path: "/fees-management" },
  { name: "Exam Management", icon: examIcon, path: "/exam-management" },
  { name: "Event Management", icon: eventIcon, path: "/events" },
  { name: "Transport Management", icon: transportIcon, path: "/transport-management" },
  { name: "Inventory Management", icon: inventoryIcon, path: "/inventory-management" },
];

const Sidebar = () => {
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

export default Sidebar;
