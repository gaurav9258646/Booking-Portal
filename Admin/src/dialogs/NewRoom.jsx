import React, { useState, useContext, useEffect } from "react";
import { Plug } from "lucide-react";
import { appStore } from "../store/app.store";
import styles from "../styles/NewRoom.module.css";

const NewRoom = () => {
  const { addRoom } = useContext(appStore);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]); 
  const [roomData, setRoomData] = useState({
    hotel: "", 
    room_no: "",
    room_type: "single",
    bed_type: "single",
    max_guests: "",
    price_per_night: "",
    amenities: "",
    discount: "",
  });

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/hotels/all`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setHotels(data.data);
        } else {
          console.error("Failed to fetch hotels");
        }
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };
    fetchHotels();
  }, []);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const payload = {
        ...roomData,
        amenities: roomData.amenities
          ? roomData.amenities.split(",").map((a) => a.trim())
          : [],
      };

      console.log("Payload Sent =>", payload);

      const res = await fetch(`${url}/room/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        addRoom(data.data);
        alert("Room added successfully!");
        setRoomData({
          hotel: "",
          room_no: "",
          room_type: "single",
          bed_type: "single",
          max_guests: "",
          price_per_night: "",
          amenities: "",
          discount: "",
        });
        setOpen(false);
      } else {
        alert("Failed to add room");
      }
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className={styles.addButton}>
        <Plug /> Add New Room
      </button>

      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Add New Room</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                Select Hotel:
                <select
                  name="hotel"
                  value={roomData.hotel}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Hotel --</option>
                  {hotels.map((hotel) => (
                    <option key={hotel._id} value={hotel._id}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Room No:
                <input
                  type="text"
                  name="room_no"
                  value={roomData.room_no}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Room Type:
                <select
                  name="room_type"
                  value={roomData.room_type}
                  onChange={handleChange}
                >
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
                  <option value="deluxe">Deluxe</option>
                </select>
              </label>

              <label>
                Bed Type:
                <select
                  name="bed_type"
                  value={roomData.bed_type}
                  onChange={handleChange}
                >
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="queen">Queen</option>
                  <option value="king">King</option>
                </select>
              </label>

              <label>
                Max Guests:
                <input
                  type="number"
                  name="max_guests"
                  value={roomData.max_guests}
                  onChange={handleChange}
                />
              </label>

              <label>
                Price per Night (₹):
                <input
                  type="number"
                  name="price_per_night"
                  value={roomData.price_per_night}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Amenities (comma separated):
                <input
                  type="text"
                  name="amenities"
                  value={roomData.amenities}
                  onChange={handleChange}
                />
              </label>

              <label>
                Discount (%):
                <input
                  type="number"
                  name="discount"
                  value={roomData.discount}
                  onChange={handleChange}
                />
              </label>

              <div className={styles.actions}>
                <button type="submit" disabled={loading}>
                  {loading ? "Adding..." : "Add Room"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRoom;
