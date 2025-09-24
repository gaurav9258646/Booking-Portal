import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaHotel,
  FaBed,
  FaCog,
  FaUsers,
  FaBook,
} from 'react-icons/fa';
import { appStore } from '../store/app.store';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.linkContainer}>
        <SideLink to="/" label="Dashboard" icon={<FaHome />} />
        <SideLink to="/bookings" label="Booking" icon={<FaBook />} />
        <SideLink to="/hotel" label="Hotel" icon={<FaHotel />} />
        <SideLink to="/room" label="Room" icon={<FaBed />} />
        <SideLink to="/setting" label="Setting" icon={<FaCog />} />
        <SideLink to="/users" label="Users" icon={<FaUsers />} />
      </div>
    </div>
  );
};

const SideLink = ({ to, label, icon }) => {
  const { closeSideber } = useContext(appStore);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      onClick={closeSideber}
    >
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
