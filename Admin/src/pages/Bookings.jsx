import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import styles from "../styles/booking.module.css";
// import NewBooking from "../dialogs/NewBooking";
// import DeleteBooking from "../dialogs/DeleteBooking";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addBooking = (newBooking) => {
    setData((prev) => [...prev, newBooking]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/booking/all`, {
          method: "GET",
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
        setError("Failed to fetch bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {/* <div className={styles.header}>
        <h1 className={styles.title}>Bookings</h1>
        <NewBooking addBooking={addBooking} />
      </div> */}

      {loading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {!loading && !error && data.length === 0 && (
        <p className={styles.message}>No bookings found.</p>
      )}

      {data.length > 0 && (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Guests</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((b) => (
                <tr key={b._id} className={styles.col}>
                  <td>{b.user_id?.name || "N/A"}</td>
                  <td>{b.room_id?.name || "N/A"}</td>
                  <td>{new Date(b.check_in_date).toLocaleDateString()}</td>
                  <td>{new Date(b.check_out_date).toLocaleDateString()}</td>
                  <td>{b.guests}</td>
                  <td>₹{b.total_price}</td>
                  <td className={styles.status}>{b.booking_status}</td>
                  <td>{b.payment_status}</td>
                  {/* <td>
                    <DeleteBooking
                      bookingId={b._id}
                      onDelete={(id) =>
                        setData((prev) => prev.filter((bk) => bk._id !== id))
                      }
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default Bookings;
