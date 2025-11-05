import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { FaHotel, FaBed } from "react-icons/fa";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalHotels: 0,
    totalRooms: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const hotelRes = await fetch(`${url}/hotels/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const hotelData = await hotelRes.json();
        console.log("Hotels Data:", hotelData);

        const roomRes = await fetch(`${url}/room/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const roomData = await roomRes.json();
        console.log("Rooms Data:", roomData);

        const totalHotels = Array.isArray(hotelData) ? hotelData.length : hotelData.data?.length || 0;
        const totalRooms = Array.isArray(roomData) ? roomData.length : roomData.data?.length || 0;

        setStats({ totalHotels, totalRooms });

      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Admin Dashboard</h2>

        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.icon}>
              <FaHotel size={24} />
            </div>
            <h3 className={styles.cardTitle}>Total Hotels</h3>
            <p className={styles.cardValue}>{stats.totalHotels}</p>
          </div>

          <div className={`${styles.card} ${styles.green}`}>
            <div className={styles.icon}>
              <FaBed size={24} />
            </div>
            <h3 className={styles.cardTitle}>Total Rooms</h3>
            <p className={styles.cardValue}>{stats.totalRooms}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
