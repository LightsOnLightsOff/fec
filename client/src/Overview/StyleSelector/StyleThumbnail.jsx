import React, {useState} from 'react';
import IndividualThumbnail from './IndividualThumbnail.jsx';

function StyleThumbnail ({setSelectedStyle, style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus, setThumbnailURL}) {

  return (
    <div >
      <div>------------Style Thumbnail----------------
        <div className = 'style-thumbnail-layout'>
          {(style) ? style.map((style) => {
              return <IndividualThumbnail setSelectedStyle = {setSelectedStyle} style = {style} setClickedName = {setClickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus} setThumbnailURL = {setThumbnailURL}/>
          }) : null}
        </div>
      </div>
    </div>
  )
}

export default StyleThumbnail;