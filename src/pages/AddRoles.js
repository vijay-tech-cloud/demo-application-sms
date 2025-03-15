import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/addRolesPermissions.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const CreateRole = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState(
    JSON.parse(localStorage.getItem("roles")) || []
  );
  const [roleData, setRoleData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    std: "",
    div: "",
    permissions: [],
  });

  const modules = [
    "Student Management",
    "Staff Management",
    "Class Management",
    "Academic Management",
    "Exam Management",
    "Fees Management",
  ];

  const handlePermissionChange = (module, action) => {
    setRoleData((prevData) => {
      const updatedPermissions = [...prevData.permissions];
      const existingModule = updatedPermissions.find((p) => p.module === module);

      if (existingModule) {
        existingModule.actions = existingModule.actions.includes(action)
          ? existingModule.actions.filter((a) => a !== action)
          : [...existingModule.actions, action];
      } else {
        updatedPermissions.push({ module, actions: [action] });
      }

      return { ...prevData, permissions: updatedPermissions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roleData.firstName || !roleData.designation) {
      alert("Please fill in all required fields!");
      return;
    }

    // Retrieve existing roles
    const existingRoles = JSON.parse(localStorage.getItem("roles")) || [];

    // Append new role
    const updatedRoles = [...existingRoles, roleData];

    // Save to local storage
    localStorage.setItem("roles", JSON.stringify(updatedRoles));

    // Update state immediately to reflect changes on Roles page
    setRoles(updatedRoles);

    // Redirect back to Roles page
    navigate("/staff-roles");
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Role Creation</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {/* Full Name Input Fields */}
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <div className={styles.nameInputs}>
              <input
                type="text"
                placeholder="First Name"
                value={roleData.firstName}
                onChange={(e) => setRoleData({ ...roleData, firstName: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Middle Name"
                value={roleData.middleName}
                onChange={(e) => setRoleData({ ...roleData, middleName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={roleData.lastName}
                onChange={(e) => setRoleData({ ...roleData, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Designation Field */}
          <label>Designation</label>
          <input
            type="text"
            placeholder="Designation"
            value={roleData.designation}
            onChange={(e) => setRoleData({ ...roleData, designation: e.target.value })}
            required
          />

          {/* Std & Div Fields */}
          <div className={styles.smallInputs}>
            <div>
              <label>Std</label>
              <input
                type="text"
                placeholder="Std"
                value={roleData.std}
                onChange={(e) => setRoleData({ ...roleData, std: e.target.value })}
              />
            </div>
            <div>
              <label>Div</label>
              <input
                type="text"
                placeholder="Div"
                value={roleData.div}
                onChange={(e) => setRoleData({ ...roleData, div: e.target.value })}
              />
            </div>
          </div>

          {/* Permissions Table */}
          <h3>Assign Permissions:</h3>
          <table className={styles.permissionsTable}>
            <thead>
              <tr>
                <th>Module Name</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index}>
                  <td>{module}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={roleData.permissions.some((p) => p.module === module && p.actions.includes("View"))}
                      onChange={() => handlePermissionChange(module, "View")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={roleData.permissions.some((p) => p.module === module && p.actions.includes("Edit"))}
                      onChange={() => handlePermissionChange(module, "Edit")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={roleData.permissions.some((p) => p.module === module && p.actions.includes("Delete"))}
                      onChange={() => handlePermissionChange(module, "Delete")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={roleData.permissions.some((p) => p.module === module && p.actions.includes("Control"))}
                      onChange={() => handlePermissionChange(module, "Control")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRole;
