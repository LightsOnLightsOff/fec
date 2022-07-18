import React, {useState, useEffect} from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageGalleryOverview ({selectedStyle, defaultSKU, setInExpandedView, inExpandedView}) {

  let imageArray = [];
  let thumbnailArray = [];

  const [indexOfPicture, setIndexOfPicture] = useState(null);
  const [thumbnailClicked, setThumbnailClicked] = useState(false);
  const [defaultMainImageHeight, setDefaultMainImageHeight] = useState(300)
  const [clickedOnImage, setClickedOnImage] = useState (false);
  const [zoomedView, setZoomedView] = useState(false);
  const [styleIndex, setStyleIndex] = useState(1);

  const[rightArrowClicked, setRightArrowClicked] = useState (false);
  const [leftArrowClicked, setLeftArrowClicked] = useState(false);
  const [newIndex, setNewIndex] = useState(0);

  if (leftArrowClicked) {
    setLeftArrowClicked(false);
    setStyleIndex(newIndex)
  }

  if (rightArrowClicked) {
    setRightArrowClicked(false);
    setStyleIndex(newIndex+2)
  }

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

  const handleClickThumbnail = (event, indexThumbnail) => {
    var index = thumbnailArray.indexOf(event.target.src)
    setIndexOfPicture(index)
    setThumbnailClicked(true)
    setStyleIndex(indexThumbnail);
  }

  const exitExpandedImage = (event) => {
    event.preventDefault();
    setDefaultMainImageHeight(300)
    setClickedOnImage(false)
    setInExpandedView(false)
  }

  return (
    <div>
      <MainImage indexOfPicture = {indexOfPicture} setIndexOfPicture = {setIndexOfPicture} thumbnailClicked = {thumbnailClicked} setThumbnailClicked = {setThumbnailClicked} setLeftArrowClicked = {setLeftArrowClicked} setNewIndex = {setNewIndex} setRightArrowClicked = {setRightArrowClicked}>
        {imageArray.map(url => {
          return  <div className = 'main-image-carousel'>
                    <img onClick = {expandImage} style = {{height: defaultMainImageHeight, width: 'auto', borderRadius: 20, cursor: !inExpandedView ? 'pointer' : 'default'}} src= {url}/>
                    {clickedOnImage ? <button onClick = {exitExpandedImage} className = 'close-expanded-view'>X</button> : null}
                  </div>
        })}
      </MainImage>
      <ImageThumbnail show = {7}>
        {thumbnailArray.map((url, index)=> {
          index += 1
          return  <div src= {url} className = 'thumbnail-image-carousel' >
                    <img onClick = {() => {handleClickThumbnail(event, index)}} className = 'individual-thumbnail-image-gallery' style = {{border: ((index === styleIndex))? '5px solid darkgoldenrod': 'none'}} src= {url} />
                  </div>
        })}
      </ImageThumbnail>
    </div>
  )
}

export default ImageGalleryOverview;