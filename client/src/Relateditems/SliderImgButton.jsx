import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ImgButton ({
  item,
  style,
  index,
  imgs,
  clickProduct,
  clickStar,
  product
}) {
  const [show, setShow] = useState(false)

  const starStyle = {
    position: 'relative',
    zIndex: '1',
    color: 'orange',
    position: 'fixed',
    marginLeft:'400px'
  }

  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
  }

  // console.log('product in imgandbutton',(product.length-index-1)*350+5)
  // console.log('let me know the index after render', index)
  return (
    <div>
      <div
        className='fav'
        onClick={() => {
          clickStar(item)
        }}
        name={item.name}
        style={{ ...starStyle }}
      >
        ☆{/* <FontAwesomeIcon icon={faStar} /> */}
      </div>
      <div >
        <img style={{}}
          className='under-star'
          onClick={clickProduct}
          src={style[index].photo ? style[index].photo : imgs}
          style={imgStyles}
          name={item.id}
        />
      </div>
    </div>
  )
}

export default memo(ImgButton)
