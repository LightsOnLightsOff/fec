import React, {useState} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview ({selectedStyle}) {

  let photos = selectedStyle.photos;
  let imageArray = [];
  let thumbnailArray = [];



  for (let key in photos) {
    console.log (key, 'key in photos')
    console.log (photos[key].thumbnail_url, 'thumbnail url')
    console.log (photos[key].url, 'url')

    thumbnailArray.push(photos[key].thumbnail_url)
    imageArray.push(photos[key].url)
  }

  console.log (thumbnailArray, 'thumbnail array')
  console.log (imageArray, 'image array')

  return (
    <div>
      <div>---------------Image Gallery Overview--------------</div>
      <MainImage>
        {imageArray.map(url => {
          return <img height="300px" width="300px" src= {url}/>
        })}
      </MainImage>
      <ImageThumbnail show = {7}>
        {imageArray.map(url => {
          return <img height="300px" width="300px" src= {url}/>
        })}
        </ImageThumbnail>
    </div>
  )
}

export default ImageGalleryOverview;