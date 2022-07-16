import React, {useState, useEffect} from 'react';

function IndividualThumbnail ({setSelectedStyle, style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus, setThumbnailURL}) {

  let thumbnailURL = {style}.style.photos[0].thumbnail_url;

  const handleClick = (event) => {
    event.preventDefault();
    setClickedName({style}.style.name)
    setOriginalPrice({style}.style.original_price)
    setSalePrice({style}.style.sale_price)
    setSKUS({style}.style.skus)
    setThumbnailURL({style}.style.photos[0].thumbnail_url)
    setSelectedStyle({style}.style);
  }

  return (
    <span onClick = {handleClick}>
        <img style = {{height: 75, width: 'auto', borderRadius: 10}} src={thumbnailURL}/>
    </span>
  )
}

export default IndividualThumbnail;