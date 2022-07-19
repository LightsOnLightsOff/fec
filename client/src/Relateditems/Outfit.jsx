import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
import ReactCustomArrow from './OutfitArrow.jsx'
import {Control} from './SliderControl.jsx'

function Outfit ({
  currentProduct,
  style,
  imgs,
  findstyleByid,
  outfit,
  setOutfit,
  currentStyle,
  setCurrS,
  rating,
  countClick,
  setCount
}) {
  const [clicked, setC] = useState(false)
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }
  var renderArrows = () => {
    return (
      <div className='slider-arrow'>
        <ButtonBase
          className='arrow-btn prev'
          onClick={() => slider.slickPrev()}
        >
          <ArrowLeftIcon />
        </ButtonBase>
        <ButtonBase
          className='arrow-btn next'
          onClick={() => slider.slickNext()}
        >
          <ArrowRightIcon />
        </ButtonBase>
      </div>
    )
  }


  var clickPlus = function (e) {
    if (!clicked) {
      setOutfit(pre => {
        return [...pre, currentProduct]
      })
      setCount(pre => pre + 1)
    }
    console.log('currentProduct:', currentProduct)
    setC(true)
  }

  var findCurrentStyle = function (id) {
    findstyleByid(id).then(res => {
      // console.log('currentstyle invoke after mounting', res)
      setCurrS(pre => [...pre, res])
    })
  }

  useEffect(() => {
    // console.log('ONCE List of variable currentProduct', outfit,currentProduct);
    findCurrentStyle(currentProduct.id)
  }, [])

  console.log('      outfit before rendering', countClick, outfit.length)
  if (outfit.length > 0 && countClick === outfit.length) {
    return (
      <div>
        <h4 className='title'> YOUR OUTFIT</h4>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size='3x'
          className='plus-button'
          onClick={clickPlus}
        />
        <div className='slider'>
        <ReactCustomArrow outfit={outfit} countClick={countClick} currentStyle={currentStyle} imgStyles={imgStyles} style={style} rating={rating}/>

        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h4 className='title'> YOUR OUTFIT</h4>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size='3x'
          className='plus-button'
          onClick={clickPlus}
        />
      </div>
    )
  }
}

export default Outfit
