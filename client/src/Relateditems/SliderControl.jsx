import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Control ({style}) {
  const [leftArrow, setLeft] = useState(0)
  const [rightArrow, setRight] = useState(0)
  const [arrowDiff, setDiff] = useState(0)


  var arrowClick = function (e) {
    if (e.target.getAttribute('id') === 'first-btn') {
      setLeft(pre => pre + 1)
      var diff = rightArrow - leftArrow - 1
      setDiff(diff)
    } else {
      setRight(pre => pre + 1)
      var diff = rightArrow + 1 - leftArrow
      setDiff(diff)
    }
  }


  return (
    <div>
      <div className='controls'>
        <button
          onClick={arrowClick}
          id='first-btn'
          type='button'
          style={arrowDiff === 0 ? { display: 'none' } : null}
        >
          ❮
        </button>
        <button
          onClick={arrowClick}
          id='second-btn'
          type='button'
          style={arrowDiff === style.length - 3 ? { display: 'none' } : null}
        >
          ❯
        </button>
      </div>
    </div>
  )
}

export default Control
