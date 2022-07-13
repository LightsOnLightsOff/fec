import React, {useState, useEffect} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview ({selectedStyle, defaultSKU}) {

  let imageArray = [];
  let thumbnailArray = [];

  if (Object.keys(selectedStyle).length === 0 ) {
    let photos = defaultSKU.photos;
    for (let key in photos) {
      thumbnailArray.push(photos[key].thumbnail_url)
      imageArray.push(photos[key].url)
    }
  } else {
    let photos = selectedStyle.photos;
    for (let key in photos) {
      thumbnailArray.push(photos[key].thumbnail_url)
      imageArray.push(photos[key].url)
    }
  }

  return (
    <div>
      <div>---------------Image Gallery Overview--------------</div>
      <MainImage>
        {imageArray.map(url => {
          return <img height="300px" width="300px" src= {url}/>
        })}
      </MainImage>
      <ImageThumbnail show = {7}>
        {thumbnailArray.map(url => {
          return <img height="300px" width="300px" src= {url}/>
        })}
        </ImageThumbnail>
    </div>
  )
}

export default ImageGalleryOverview;