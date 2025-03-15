import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/announcementDetails.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const AnnouncementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  // Fetch the announcement based on the ID
  const announcement = announcements[id];

  if (!announcement) {
    return (
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Topbar />
          <h2>Announcement Not Found</h2>
          <button onClick={() => navigate("/staff-announcements")}>
            Back to Announcements
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Sidebar />
          
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.headerSection}>
            <h2>Staff Management</h2>
            <button className={styles.addButton} onClick={() => navigate("/staff-announcements/create")}>Add</button>
       </div>   
       <div className={styles.headerTable}>
                <h3>Announcements</h3>
       </div>  
        <div className={styles.announcementBox}>
          <div className={styles.profileSection}>
            <div className={styles.profilePic}></div>
            <div>
              <h3>{announcement.author}</h3>
              <p className={styles.role}>{announcement.role}</p>
            </div>
          </div>
          <h2>{announcement.title}</h2>
          <small className={styles.date}>{announcement.date}</small>
          <p className={styles.content}>{announcement.content}</p>
          <button onClick={() => navigate("/staff-announcements")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
