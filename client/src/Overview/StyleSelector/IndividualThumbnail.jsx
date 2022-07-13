import React, {useState, useEffect} from 'react';

function IndividualThumbnail ({setSelectedStyle, style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus, setThumbnailURL}) {
  console.log ({style}.style, '<---------- In Individual Thumbnail ------------->')

  let thumbnailURL = {style}.style.photos[0].thumbnail_url;

  const handleClick = (event) => {
    event.preventDefault();
    setClickedName({style}.style.name)
    setOriginalPrice({style}.style.original_price)
    setSalePrice({style}.style.sale_price)
    setSKUS({style}.style.skus)
    setThumbnailURL({style}.style.photos[0].thumbnail_url)
    console.log({style}.style, 'clicked style in individual thumbnail')
    setSelectedStyle({style}.style);
  }

  return (
    <div>
      <div onClick = {handleClick}>
        <img height="100px" width="100px" src={thumbnailURL}></img>
      </div>
    </div>
  )
}

export default IndividualThumbnail;