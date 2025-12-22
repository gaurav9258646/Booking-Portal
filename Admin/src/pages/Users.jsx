import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import styles from "../styles/users.module.css";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        console.log(url)
        const res = await fetch(`${url}/users/all`, {
          
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
        setError("Failed to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>ALL USERS</h2>

        {loading && <p className={styles.loading}>Loading users...</p>}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

export default Users;
