import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/addTimetable.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const AddTimetable = ({ onAddTimetable }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    timetable: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Timetable Input Change
  const handleTimetableChange = (day, value) => {
    setFormData({
      ...formData,
      timetable: { ...formData.timetable, [day]: value },
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.designation) {
      alert("Please fill all required fields.");
      return;
    }

    // Pass data to Timetable Allocation page
    onAddTimetable({
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`,
      designation: formData.designation,
      ...formData.timetable,
    });

    navigate("/staff-timetable"); // Redirect back
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.heading}>Staff Management</h2>
        <SearchBar placeholder="Search Staff" />

        {/* Form Fields */}
        <div className={styles.formContainer}>
          <label>Full Name:</label>
          <div className={styles.nameInputs}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>

          <label>Designation:</label>
          <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required />

          {/* Timetable Section */}
          <h3 className={styles.tableHeading}>Timetable</h3>
          <table className={styles.timetableTable}>
            <thead>
              <tr>
                {Object.keys(formData.timetable).map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(formData.timetable).map((day) => (
                  <td key={day}>
                    <input type="text" value={formData.timetable[day]} onChange={(e) => handleTimetableChange(day, e.target.value)} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* Submit Button */}
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTimetable;
