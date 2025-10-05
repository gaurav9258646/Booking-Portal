import React from "react";
import { Plus } from "lucide-react";
import styles from "../styles/NewHotel.module.css";

const NewHotel = ({ addHotel }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className={styles.addButton}>
        <Plus className={styles.icon} /> Add New Hotel
      </button>

      {open && (
        <HotelDialog addHotel={addHotel} open={open} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

const HotelDialog = ({ addHotel, open, onClose }) => {
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: "",
    address: "",
    city: "",
    description: "",
    price: "",
    amenities: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/hotels/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (!data.success) {
        alert(data.error || "Something went wrong!");
        return;
      }

      addHotel(data.data);
      setFormState({
        name: "",
        address: "",
        city: "",
        description: "",
        price: "",
        amenities: "",
        image: "",
      });
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error while adding hotel!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>

        <h2 className={styles.title}>🏨 Add New Hotel</h2>

        <div className={styles.form}>
          <label>
            <span>Hotel Name</span>
            <input
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              placeholder="e.g. The Grand Palace"
            />
          </label>

          <label>
            <span>City</span>
            <input
              name="city"
              type="text"
              value={formState.city}
              onChange={handleChange}
              placeholder="e.g. Jaipur"
            />
          </label>

          <label>
            <span>Address</span>
            <input
              name="address"
              type="text"
              value={formState.address}
              onChange={handleChange}
              placeholder="Full address"
            />
          </label>

          <label>
            <span>Description</span>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              placeholder="Describe your hotel..."
              rows={3}
            />
          </label>

          <label>
            <span>Average Price / Night (₹)</span>
            <input
              name="price"
              type="number"
              value={formState.price}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Amenities</span>
            <input
              name="amenities"
              type="text"
              value={formState.amenities}
              onChange={handleChange}
              placeholder="e.g. WiFi, Pool, Gym, Parking"
            />
          </label>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            {loading ? "Adding Hotel..." : "Add Hotel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
