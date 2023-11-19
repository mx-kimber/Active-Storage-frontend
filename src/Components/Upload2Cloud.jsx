import React, { useState } from 'react';
import "../App.css"
import axios from 'axios';

export function Upload2Cloud() {
  const [imageSelected, setImageSelected] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageSelected(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCloudinaryUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadImage = () => {
    const formData= new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "CLOUDINARY-UPLOAD-PRESET-NAME")

    axios.post(
      "https://api.cloudinary.com/v1_1/YOUR-CLOUD-NAME/image/upload", 
      formData
    ).then((response) => {
      console.log(response);
    });
  
  };

  return (
    <div>
      <div className="heading">
        <h2>Upload to Cloudinary</h2>
        (without rails backend)
      </div>
      <div className="input">
        <input 
          type="file"
          onChange={handleImageChange}
        />
        <button onClick={uploadImage}> Upload Image </button>
      </div>
      <div className="preview-image-container">
        {cloudinaryUrl && (
          <img src={cloudinaryUrl} alt="Preview" className="preview-image" />
        )}
      </div>
    </div>
  )
}

export default Upload2Cloud