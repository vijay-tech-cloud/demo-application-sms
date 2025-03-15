import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import logo from "../assets/images/sspd.png";
import stafflistIcon from "../assets/images/Icons/StaffManagemnet/StaffList.svg";
import staffIcon from "../assets/images/Icons/StaffManagemnet/StaffRegistration.svg";
import attendance from "../assets/images/Icons/StaffManagemnet/Attendence.svg";
import leave from "../assets/images/Icons/StaffManagemnet/LeaveManagemnet.svg";
import timetable from "../assets/images/Icons/StaffManagemnet/Timetable.svg";
import roles from "../assets/images/Icons/StaffManagemnet/Roles.svg";
import announcement from "../assets/images/Icons/StaffManagemnet/Announcemnets.svg";

const menuItems = [
  { name: "Staff List", icon: stafflistIcon, path: "/staff" },
  { name: "Staff Registration", icon: staffIcon, path: "/staff-registration" },
  { name: "Attendance Management", icon: attendance, path: "/staff-attendance" },
  { name: "Leave Management", icon: leave, path: "/staff-leave" },
  { name: "Timetable Allocation", icon: timetable, path: "/staff-timetable" },
  { name: "Roles & Permissions", icon: roles, path: "/staff-roles" },
  { name: "Announcements", icon: announcement, path: "/staff-announcements" }
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
