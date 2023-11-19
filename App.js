// App.js
import "./App.css"
import React, { useEffect, useState } from 'react';

import UserInfo from './Components/UserInfo';
import PhotoGrid from './Components/PhotoGrid';
function App() {
  const [userData, setUserData] = useState({});
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch('http://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => setUserData(data));

    // Fetch photo grid data
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);

  return (
    <
      div className="App">

      <UserInfo userData={userData} />
      <PhotoGrid photoData={photoData} />
    </div>
  );
}

export default App;
