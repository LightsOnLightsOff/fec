import React, {useState, useEffect} from 'react';
import IndividualThumbnail from './IndividualThumbnail.jsx';

function StyleThumbnail ({style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus}) {
  console.log ({style}.style, '<---------- In Style Thumbnail ------------->')

  return (
    <div>
      <div>Style Thumbnail</div>
      {(style) ? style.map((style) => {
        return <IndividualThumbnail style = {style} setClickedName = {setClickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus}/>
      }) : null}
    </div>
  )
}

export default StyleThumbnail;