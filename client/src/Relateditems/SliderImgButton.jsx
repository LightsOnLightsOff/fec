import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ImgButton ({ item, style, index, imgs, clickProduct, clickStar,product }) {
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    position: 'relative'
  }

  const [show, setShow] = useState(false)

  const starStyle = {
    position: 'absolute',
    zIndex: '1',
    color: 'orange'
  }


console.log('product',(product.length-index)*350)
    // console.log('let me know the index after render', index)
    return (
      <div>
        <div
          className='fav'
          onClick={() => {
            clickStar(item)
          }}
          name={item.name}
          style={{ ...starStyle, right: `${(product.length-index-1)*350+15}px` }}
        >
          <FontAwesomeIcon icon={faStar} />
        </div>
        <img
          className='under-star'
          onClick={clickProduct}
          src={style[index].photo ? style[index].photo : imgs}
          style={imgStyles}
          name={item.id}
        />
      </div>
    )
  }


export default memo(ImgButton)
