import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ImgButton ({ item, style, index, imgs, clickProduct, clickStar }) {
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        id='fav-1'
        onClick={() => {
          clickStar(item)
        }}
        name={item.name}
        style={{ position: 'relative' }}
      >
        ☆
      </button>
      <img
        onClick={clickProduct}
        src={style[index].photo ? style[index].photo : imgs}
        style={imgStyles}
        name={item.id}
      />
    </div>
  )
}

export default memo(ImgButton)
