import { Trash, X } from "lucide-react";
import React from "react";
import styles from "../styles/DeleteHotel.module.css";

const DeleteHotel = ({ hotelId, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/hotels/${hotelId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.error || "Failed to delete hotel!");
        return;
      }

      onDelete(hotelId);
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Network error while deleting hotel!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Trash
        onClick={() => setOpen(true)}
        className="text-red-500 cursor-pointer"
      />

      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              onClick={() => setOpen(false)}
              className={styles.closeButton}
            >
              <X />
            </button>

            <h1 className={styles.title}>
              Are you sure you want to delete this hotel?
            </h1>

            <div className={styles.buttonGroup}>
              <button
                onClick={() => setOpen(false)}
                className={styles.cancelButton}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className={styles.deleteButton}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteHotel;
