import React, { useState } from "react";
import Style from "../styles/addInventory.module.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from '../components/SearchBar'
const AddInventory = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        itemName: "",
        category: "",
        quantity: "",
        location: "",
        vendorDetails: "",
        dateOfPurchase: "",
        purchaseAmount: "",
        managedBy: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
 

        <div className={Style.addInventoryContainer}>
            <Sidebar />
            <Topbar />
            <h2>Inventory Management</h2>
            <SearchBar placeholder="Search Inventory" />
            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.formGroup}>
                    <label>Item Name:</label>
                    <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />
                </div>

                <div className={Style.formRow}>
                    <div className={Style.formGroup}>
                        <label>Category:</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
                    </div>

                    <div className={Style.formGroup}>
                        <label>Quantity:</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                    </div>

                    <div className={Style.formGroup}>
                        <label>Location:</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                    </div>
                </div>

                <div className={Style.formGroup}>
                    <label>Vendor Details:</label>
                    <input type="text" name="vendorDetails" value={formData.vendorDetails} onChange={handleChange} required />
                </div>

                <div className={Style.formRow}>
                    <div className={Style.formGroup}>
                        <label>Date of Purchase:</label>
                        <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} required />
                    </div>

                    <div className={Style.formGroup}>
                        <label>Purchase Amount:</label>
                        <input type="number" name="purchaseAmount" value={formData.purchaseAmount} onChange={handleChange} required />
                    </div>
                </div>

                <div className={Style.formGroup}>
                    <label>Managed By:</label>
                    <input type="text" name="managedBy" value={formData.managedBy} onChange={handleChange} required />
                </div>

                <div className={Style.buttonContainer}>
                    <button className={Style.cancelButton} onClick={onCancel}>Cancel</button>
                    <button type="submit" className={Style.saveButton}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddInventory;
