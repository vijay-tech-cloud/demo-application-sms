import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/announcements.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const Announcements = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("inbox");
  const [announcements, setAnnouncements] = useState(
    JSON.parse(localStorage.getItem("announcements")) || []
  );

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

        <div className={styles.tabs}>
          <button
            className={activeTab === "inbox" ? styles.activeTab : ""}
            onClick={() => setActiveTab("inbox")}
          >
            Inbox
          </button>
          <button
            className={activeTab === "draft" ? styles.activeTab : ""}
            onClick={() => setActiveTab("draft")}
          >
            Draft
          </button>
          <button
            className={activeTab === "sent" ? styles.activeTab : ""}
            onClick={() => setActiveTab("sent")}
          >
            Sent
          </button>
        </div>

        <div className={styles.announcementList}>
          {announcements.map((announcement, index) => (
            <div key={index} className={styles.announcementItem}>
              <h3>{announcement.title}</h3>
              <small>{announcement.date}</small>
              <p>{announcement.content.substring(0, 50)}...</p>
              <button
                className={styles.readMore}
                onClick={() => navigate(`/staff-announcements/${index}`)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
