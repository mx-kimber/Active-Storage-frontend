import React from 'react'
import "../App.css"

export function Upload2Cloud() {

  const uploadImage = (files) => {
    console.log(files[0]);
  }

  return (
    <div>
      <div className="heading">
        <h2>Upload to Cloudinary</h2>
        (without rails backend)
      </div>
      <div className="input">
        <input 
          type="file"
          onChange={(event) => {
            uploadImage(event.target.files);
          }}
        />
      </div>
    </div>
  )
}

export default Upload2Cloud