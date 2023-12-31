import { AppContext } from '../App';
import React, { useContext } from 'react';
import axios from 'axios'; 

function FileForm() {
  const { latestImage, setLatestImage } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
      const fileData = new FormData();

      fileData.append("user[avatar]", event.target.avatar.files[0]);
      // change number for images if multiple ^
      sendToRails(fileData);
  }

  function sendToRails(fileData) {
    axios.post("http://localhost:3000/users.json", fileData)
      .then(response => {
        setLatestImage(response.data.avatar_url);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(file) => handleSubmit(file)}>
          <label htmlFor="avatar">Avatar </label>
          <input type="file" name="avatar" id="avatar" /> 
          {/* for multiple files, include 'multiple' above */}
          <br />
          <button type="submit">Upload Avatar</button>
      </form>
    </div>
  ); 
}


export default FileForm