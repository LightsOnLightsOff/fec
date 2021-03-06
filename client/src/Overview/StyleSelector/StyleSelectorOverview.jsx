import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../index.jsx'
import axios from 'axios';
import StyleName from './StyleName.jsx';
import StyleThumbnail from './StyleThumbnail.jsx';
import config from '../../../../config.js'

function StyleSelectorOverview ({setSelectedStyle, setOriginalPrice, setSalePrice, setSKUS, skus, setStyleName, setThumbnailURL, setDefaultSKU}) {
  const [styles, setStyles] = useState(0);
  const [clickedName, setClickedName] = useState('');

  const context = useContext(UserContext)

  useEffect (() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${context.productInfo.id}/styles`, {
    params: { page: 1, count: 1 },
    headers: {

      Authorization: config.TOKEN
    }
    })
    .then(res => {
      let styleGuide = res.data;
      setStyles(styleGuide.results)
    })
  }, [context.productInfo.id])

  return (
    <div className = 'style-selector-section'>
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