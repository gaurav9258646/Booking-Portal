import React, { useState } from "react";
import styles from "../styles/signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.name || !formData.email || !formData.password) {
      return setMessage("All fields are required");
    }

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;
      const response = await fetch(`${url}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Signup failed");
        return;
      }

      setMessage("Signup successful");

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>SignUp<span>Form</span></h2>

        {message && <p className={styles.message}>{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Creating..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
