import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import axios from 'axios';

function LatestAvatar() {

  const { latestImage, setLatestImage } = useContext(AppContext);

  useEffect(() => {
    axios.get("http://localhost:3000/latest.json")
      .then(response => {
        setLatestImage(response.data.avatar_url);
      })
      .catch(error => {
        console.log(error);
      });
  }, [latestImage]);

  return (
    <div>
      <img src={latestImage} alt ="latest image" className="latest-image" />
    </div>
  )
}

export default LatestAvatar;
