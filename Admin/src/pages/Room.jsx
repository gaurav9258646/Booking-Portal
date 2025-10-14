import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/room.module.css'

function Room() {

  const [data,setData]  = useState([]);
  const  [loading,setLoading] = useState(false);
  const [error,setError]  = useState(null);


  const addRoom =(newRoom )=>{
    setData((prev)=> [...prev,newRoom]);
  }

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        setLoading(true);
        setError(null);


        const url  = import.meta.env.VITE_SERVER_URL;
        const res = await fetch (`${url}/room/all`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              Authorization : `Bearer ${localStorage.getItem("token")}`,

            },
        });
        const result = await res.json();
        console.log(result)
        if(!result.success){
          setError (result.error || "Semething went wrong !");
          return;
        }
        setData(result.data ||[]);

        
      }catch(err){
        console.log(err);
        setError("Failed to fetch rooms. Please try again.");
      }finally{
        setLoading(false);
      };
    };
    fetchData();
  },[]);

  return (
    <Layout>
      
      {/* <div className={styles.header}>
        <h1 className={styles.title}>Rooms</h1>
        <NewRoom addRoom={addRoom} />
      </div> */}

      {loading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {!loading && !error && data.length === 0 && (
        <p className={styles.message}>No rooms found.</p>
      )}

      {data.length > 0 && (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Room No</th>
                <th>Hotel</th>
                <th>Type</th>
                <th>Price/Night</th>
                <th>Beds</th>
                <th>Available</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((room) => (
                <tr key={room._id} className={styles.col}>
                   <td>{room.room_no}</td>
                  <td>{room.hotel?.name || '-'}</td>
                  <td>{room.room_type}</td>
                  <td>{room.bed_type || '-'}</td>
                  <td>₹{room.price_per_night}</td>
                  <td>{room.max_guests}</td>
                  <td>{room.is_available ? 'Yes' : 'No'}</td>
                  <td>{room.discount ? `${room.discount}%` : '-'}</td>
                  <td>
                    {/* <DeleteRoom
                      roomId={room._id}
                      onDelete={(id) =>
                        setData((prev) => prev.filter((r) => r._id !== id))
                      }
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    
    </Layout>
  )
}

export default Room