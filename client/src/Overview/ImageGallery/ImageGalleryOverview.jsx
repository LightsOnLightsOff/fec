import React, {useState} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview ({selectedStyle, defaultSKU, setInExpandedView}) {

  let imageArray = [];
  let thumbnailArray = [];

  const [indexOfPicture, setIndexOfPicture] = useState(null);
  const [thumbnailClicked, setThumbnailClicked] = useState(false);
  const [defaultMainImageHeight, setDefaultMainImageHeight] = useState(300)
  const [clickedOnImage, setClickedOnImage] = useState (false);
  const [zoomedView, setZoomedView] = useState(false);

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

  const expandImage = (event) => {
    setClickedOnImage(true);
    setDefaultMainImageHeight(400)
    setInExpandedView(true)
  }

  const handleClickThumbnail = (event) => {
    event.preventDefault();
    var index = thumbnailArray.indexOf (event.target.src)
    setIndexOfPicture(index)
    setThumbnailClicked(true)
  }

  const exitExpandedImage = (event) => {
    event.preventDefault();
    setDefaultMainImageHeight(300)
    setClickedOnImage(false)
    setInExpandedView(false)
  }

  return (
    <div>
      <div>---------------Image Gallery Overview--------------</div>
      <MainImage indexOfPicture = {indexOfPicture} setIndexOfPicture = {setIndexOfPicture} thumbnailClicked = {thumbnailClicked} setThumbnailClicked = {setThumbnailClicked}>
        {imageArray.map(url => {
          return  <div className = 'main-image-carousel'>
                    <img onClick = {expandImage} style = {{height: defaultMainImageHeight, width: 'auto', borderRadius: 20}} src= {url}/>
                    {clickedOnImage ? <button onClick = {exitExpandedImage} className = 'close-expanded-view'>X</button> : null}
                  </div>
        })}
      </MainImage>
      <ImageThumbnail show = {7} >
        {thumbnailArray.map(url => {
          return  <div src= {url} className = 'thumbnail-image-carousel'>
                    <img onClick = {handleClickThumbnail} style = {{height: 50,  width: 'auto', borderRadius: 5}} src= {url} />
                  </div>
        })}
      </ImageThumbnail>
    </div>
  )
}

export default ImageGalleryOverview;