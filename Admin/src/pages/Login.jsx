import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!formState.email || !formState.password) {
      setError("Email and Password are required");
      return;
    }

    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Invalid credentials");
        return;
      }

      if (data.data.user.role !== "admin") {
        setError("You are not an admin!");
        return;
      }

      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("refresh", data.data.refreshToken);

      navigate("/");
    } catch (err) {
      console.error("Error", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, [navigate]);

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        {error && <p className={styles.error}>{error}</p>}

        <InputField
          value={formState.email}
          update={setFormState}
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <InputField
          value={formState.password}
          update={setFormState}
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <button disabled={loading} className={styles.button}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const InputField = ({ update, value, label, type, placeholder }) => (
  <div className={styles.inputField}>
    <span className={styles.label}>{label}</span>
    <InputBox
      value={value}
      update={update}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

const InputBox = ({ update, value, type, placeholder }) => (
  <input
    value={value}
    name={type}
    onChange={(e) =>
      update((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    type={type}
    placeholder={placeholder}
    className={styles.inputBox}
  />
);

export default Login;
