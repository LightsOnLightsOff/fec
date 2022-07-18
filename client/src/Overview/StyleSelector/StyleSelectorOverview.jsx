import React, {useState, useEffect} from 'react';

import axios from 'axios';

import StyleName from './StyleName.jsx';
import StyleThumbnail from './StyleThumbnail.jsx';
import config from '../../../../config.js'

function StyleSelectorOverview ({setSelectedStyle, setOriginalPrice, setSalePrice, setSKUS, skus, setStyleName, setThumbnailURL, setDefaultSKU}) {
  const [styles, setStyles] = useState(0);
  const [clickedName, setClickedName] = useState('');

  useEffect (() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65633/styles', {
    params: { page: 1, count: 1 },
    headers: {

      Authorization: config.TOKEN
    }
    })
    .then(res => {
      let styleGuide = res.data;
      setStyles(styleGuide.results)
    })
  }, [])

  return (
    <div className = 'style-selector-section'>
      <div >------------Style Selector Section--------------------</div>
      <div>
        <StyleName style = {styles} clickedName = {clickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setStyleName = {setStyleName} setDefaultSKU = {setDefaultSKU}/>
      </div>
      <div>
        <StyleThumbnail setSelectedStyle = {setSelectedStyle} style = {styles} setClickedName = {setClickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus} setThumbnailURL = {setThumbnailURL}/>
      </div>
    </div>
  )
}

export default StyleSelectorOverview;