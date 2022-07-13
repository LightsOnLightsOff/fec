import React, {useState} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview ({selectedStyle, defaultSKU}) {

  let imageArray = [];
  let thumbnailArray = [];

  const [indexOfPicture, setIndexOfPicture] = useState(null);
  const [thumbnailClicked, setThumbnailClicked] = useState(false);

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

  const handleClick = (event) => {
    event.preventDefault();
    console.log (event.target.src) // url of thumbnail image clicked on
    console.log('it clicked')
    var index = thumbnailArray.indexOf (event.target.src)
    setIndexOfPicture(index)
    setThumbnailClicked(true)
  }

  return (
    <div>
      <div>---------------Image Gallery Overview--------------</div>
      <MainImage indexOfPicture = {indexOfPicture} setIndexOfPicture = {setIndexOfPicture} thumbnailClicked = {thumbnailClicked} setThumbnailClicked = {setThumbnailClicked}>
        {imageArray.map(url => {
          return <img height="300px" width="300px" src= {url}/>
        })}
      </MainImage>
      <ImageThumbnail show = {7} >
        {thumbnailArray.map(url => {
          return <div src= {url} onClick = {handleClick}><img height="150px" width="150px" src= {url} /></div>
        })}
      </ImageThumbnail>
    </div>
  )
}

export default ImageGalleryOverview;