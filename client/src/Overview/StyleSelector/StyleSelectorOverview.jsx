import React, {useState, useEffect} from 'react';

import axios from 'axios';

import StyleName from './StyleName.jsx';
import StyleThumbnail from './StyleThumbnail.jsx';

function StyleSelectorOverview ({setOriginalPrice, setSalePrice, setSKUS, skus, setStyleName, setThumbnailURL}) {
  const [styles, setStyles] = useState(0);
  const [clickedName, setClickedName] = useState('');

  useEffect (() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65633/styles', {
    params: { page: 1, count: 1 },
    headers: {
      Authorization: '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'
    }
    })
    .then(res => {
      console.log('this is the response for style guide', res.data)
      let styleGuide = res.data;
      setStyles(styleGuide.results)
    })
  }, [])

  return (
    <div>
      <div>Style Selector Section</div>
      <StyleName style = {styles} clickedName = {clickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setStyleName = {setStyleName} />
      <StyleThumbnail style = {styles} setClickedName = {setClickedName} setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus} setThumbnailURL = {setThumbnailURL}/>
    </div>
  )
}

export default StyleSelectorOverview;