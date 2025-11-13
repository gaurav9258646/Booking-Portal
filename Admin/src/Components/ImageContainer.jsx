import React, { useEffect, useState } from 'react'

function ImageContainer() { 
    const [image,setImage] = useState(null);
    const [preview,setPreview] = useState(null);
    const [loading,setLoading] = useState(true);

    const cloudName = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;
    const  preset = import.meta.env.CLOUDUINARY_SECRET_API_KEY;
    

    // useEffect(()=>{},[id])
  return (
    <div>ImageContainer</div>
  )
}

export default ImageContainer