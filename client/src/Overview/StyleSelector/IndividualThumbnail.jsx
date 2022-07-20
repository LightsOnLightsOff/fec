import React, {useState} from 'react';

function IndividualThumbnail ({setSelectedStyle, style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus, setThumbnailURL, index, thumbnailIndex, setThumbnailIndex, setChangeBorder}) {


  let thumbnailURL = {style}.style.photos[0].thumbnail_url;

  const handleClick = (event, indexStyle) => {
    event.preventDefault();
    setClickedName({style}.style.name)
    setOriginalPrice({style}.style.original_price)
    setSalePrice({style}.style.sale_price)
    setSKUS({style}.style.skus)
    setThumbnailURL({style}.style.photos[0].thumbnail_url)
    setSelectedStyle({style}.style);
    setThumbnailIndex(indexStyle);
    setChangeBorder(true);
  }

  return (
    <span >
      <img onClick = {() => {handleClick (event, index)}} style = {{height: 75, width: 'auto', borderRadius: 10, border: index === thumbnailIndex ? '5px solid #4E6E58' : 'none', cursor: 'pointer'}} src={thumbnailURL}/>
    </span>
  )
}

export default IndividualThumbnail;