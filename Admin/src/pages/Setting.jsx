import React, { useState } from 'react'
import Layout from '../Components/Layout';
import styles from "../styles/setting.module.css"

function Setting() {
   const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    phone: "9876543210",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Settings:", formData);
    alert("Settings updated successfully!");
  };
  return (
    <Layout>
      <div className={styles.settingContainer}>
        <h2 className={styles.title}>Account Settings</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Setting;