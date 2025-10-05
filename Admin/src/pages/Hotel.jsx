import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/hotel.module.css";
import NewHotel from "../dialogs/NewHotel";
import DeleteHotel from "../dialogs/DeleteHotel"; 

const Hotels = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addHotel = (newHotel) => {
    setData((prev) => [...prev, newHotel]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/hotels/all`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const result = await res.json();

        if (!result.success) {
          setError(result.error || "Something went wrong!");
          return;
        }

        setData(result.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch hotels. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>Hotels</h1>
        <NewHotel addHotel={addHotel} />
      </div>

      {loading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {!loading && !error && data.length === 0 && (
        <p className={styles.message}>No hotels found.</p>
      )}

      {data.length > 0 && (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Price/Night</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((hotel) => (
                <tr key={hotel._id}>
                  <td>{hotel.name}</td>
                  <td>{hotel.city || "-"}</td>
                  <td>{hotel.address || "-"}</td>
                  <td>₹{hotel.price || 0}</td>
                  <td className={styles.desc}>{hotel.description || "-"}</td>
                  <td>
                    <DeleteHotel
                      hotelId={hotel._id}
                      onDelete={(id) =>
                        setData((prev) => prev.filter((h) => h._id !== id))
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default Hotels;
