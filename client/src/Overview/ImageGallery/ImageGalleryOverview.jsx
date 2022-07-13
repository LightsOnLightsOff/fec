import React, {useState} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview (props) {

  return (
    <div>
      <div>---------------Image Gallery Overview--------------</div>
      <MainImage>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </MainImage>
      <ImageThumbnail />
    </div>
  )
}

export default ImageGalleryOverview;