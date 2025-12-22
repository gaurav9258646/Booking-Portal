import React, { useState } from "react";
import { Trash, X } from "lucide-react";
import styles from "../styles/DeleteRoom.module.css";

const DeleteRoom = ({ roomId, onDelete }) => {   
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;

     
      const res = await fetch(`${url}/room/${roomId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Failed to delete room!");
        return;
      }

    
      onDelete(roomId);
      setOpen(false);
      alert("Room deleted successfully!");
    } catch (err) {
      console.error("Error deleting room:", err);
      alert("Network error while deleting room!");
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
            <button onClick={() => setOpen(false)} className={styles.closeButton}>
              <X />
            </button>

            <h1 className={styles.title}>
              Are you sure you want to delete this room?
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

export default DeleteRoom;
