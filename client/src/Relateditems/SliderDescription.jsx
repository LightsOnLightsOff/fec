import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Description ({item,style,index}) {
  return (
    <div>
      <p className="below-pic">{item.category}</p>
      <h3 className="below-pic">{item.name}</h3>
      <p className="below-pic"
        style={
          style[index].salePrice
            ? {
                textDecoration: 'line-through',
                display: 'inline'
              }
            : null
        }
      >{`$${item.default_price}`}</p>
      <p className="below-pic" style={{ display: 'inline' }}>{style[index].salePrice}</p>
      <span className='thestar'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>
  )
}

export default memo(Description)
