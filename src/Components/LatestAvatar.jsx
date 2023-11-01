import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';


function LatestAvatar() {

  const { latestImage, setLatestImage } = useContext(AppContext);

  useEffect(() => {

    fetch("http://localhost:3000/latest.json")
      .then(response => response.json())
      .then(fileData => {
        setLatestImage(fileData.avatarURL);
      })
      .catch((error) => console.log(error));
  }, [latestImage]);
  return (
    <div>
      <img src={latestImage} alt ="latest image" className="latest-image" />
    </div>
  )
}


export default LatestAvatar