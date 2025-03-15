import React, { useState } from "react";
import styles from "../styles/dashboard.module.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/sspd.png";
import dashboard from "../assets/images/Icons/FeesManagement/dashboard.svg";
import structure from "../assets/images/Icons/FeesManagement/structure.svg";
import installments from "../assets/images/Icons/FeesManagement/installment.svg";
import paymententry from "../assets/images/Icons/FeesManagement/entry.svg";

const menuItems = [
  { name: "Fees Dashboard", icon: dashboard, path: "/fees-management" },
  { name: "Fee Structure Setup", icon: structure, path: "/fees-structure" },
  { name: "Installment Management", icon: installments, path: "/fees-installments" },
  { name: "Payment Entry", icon: paymententry, path: "/payment-entry" },
];

const Feessidebar = () => {
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

export default Feessidebar;
