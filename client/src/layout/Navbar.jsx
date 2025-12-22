import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Home from "../pages/Home"
import  logo from "../assets/logo3.png"
import Login from "../pages/Login"
import Signup from "../pages/signup"
import { HomeIcon, House } from "lucide-react";

const navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
      <Link to="/"  element={<Home/>}>  <img src={logo} alt="" /></Link>
      </div>

      <nav className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <Link to="/"  element={<Home/>}>Home</Link>
       <Link to="/signup"  element={<Signup/>}>SignUp</Link>
       <Link to="/login" element={<Login/>}>Login</Link>

     
      </nav>

       <Link to="/login"  className={styles.loginBtn} element={<Login/>}>Login</Link>
      <div
        className={styles.menuIcon}
        
        onClick={() => setOpen(!open)}
        >
       
        ☰
      </div>
    </header>
  );
};

export default navbar;
