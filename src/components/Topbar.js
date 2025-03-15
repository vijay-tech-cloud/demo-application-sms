import React from "react";
import styles from "../styles/dashboard.module.css";
import bellIcon from "../assets/images/Icons/Headers/Notification.svg"; 
import shareIcon from "../assets/images/Icons/Headers/Share.svg"; 
import exportIcon from "../assets/images/Icons/Headers/Export.svg";
import profileIcon from "../assets/images/Icons/Headers/Profile.svg";

const Topbar = () => {
    return (
      <div className={styles.topbar}>
        {/* Right Section - All Icons Aligned Right */}
        <div className={styles.rightIcons}>
          <img src={bellIcon} alt="Notifications" className={styles.topbarIcon} />
          <img src={shareIcon} alt="Share" className={styles.topbarIcon} />
          <img src={exportIcon} alt="Export" className={styles.topbarIcon} />
          <img src={profileIcon} alt="User Profile" className={styles.profileIcon} />
        </div>
      </div>
    );
  };

export default Topbar;
