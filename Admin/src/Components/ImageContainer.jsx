import React, { useState } from "react";
import styles from "../styles/ImageContainer.module.css";

const ImageContainer = ({ hotelId }) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !hotelId) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Hotel_booking");
      formData.append("cloud_name", "dniero1iq");

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dniero1iq/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudRes.json();

      console.log("Cloudinary response:", cloudData);

      const serverUrl = import.meta.env.VITE_SERVER_URL;

      await fetch(`${serverUrl}/hotels/update/${hotelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          images: [
            {
              url: cloudData.secure_url,
              public_id: cloudData.public_id,
            },
          ],
        }),
      });

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="image/*"
        className={styles.uploadBtn}
        onChange={handleUpload}
      />
      {loading && <span className={styles.loading}>Uploading...</span>}
    </div>
  );
};

export default ImageContainer;
