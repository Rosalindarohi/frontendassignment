// PhotoGrid.js
import React from 'react';
import "./PhotoGrid.css"
const PhotoGrid = ({ photoData }) => {
  return (
    <div className="photo-grid">
      {photoData.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
