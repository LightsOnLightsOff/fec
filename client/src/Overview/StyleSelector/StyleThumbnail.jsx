import React, {useState} from 'react';
import IndividualThumbnail from './IndividualThumbnail.jsx';

function StyleThumbnail ({setSelectedStyle, style, setClickedName, setOriginalPrice, setSalePrice, setSKUS, skus, setThumbnailURL}) {

  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [changeBorder, setChangeBorder] = useState(false);

  if (changeBorder) {
    setChangeBorder(false)
  }

  return (
    <div >
      <div>------------Style Thumbnail----------------
        <div className = 'style-thumbnail-layout'>
          {(style) ? style.map((style, index) => {
            index += 1
            return <IndividualThumbnail setSelectedStyle = {setSelectedStyle} style = {style} setClickedName = {setClickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus} setThumbnailURL = {setThumbnailURL} index = {index} thumbnailIndex = {thumbnailIndex} setThumbnailIndex = {setThumbnailIndex} setChangeBorder = {setChangeBorder} />
          }) : null}
        </div>
      </div>
    </div>
  )
}

export default StyleThumbnail;