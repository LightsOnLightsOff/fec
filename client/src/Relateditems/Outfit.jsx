import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
import OutfitArrow from './OutfitArrow.jsx'
import { Control } from './SliderControl.jsx'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

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
  setCount,
  product
}) {
  const [clicked, setC] = useState(false)
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
  }
  var renderArrows = () => {
    return (
      <div className='outlit-arrow'>
        <ButtonBase
          className='outfit-sub prev'
          onClick={() => slider.slickPrev()}
        >
          <ArrowLeftIcon />
        </ButtonBase>
        <ButtonBase
          className='outfit-sub next'
          onClick={() => slider.slickNext()}
        >
          <ArrowRightIcon />
        </ButtonBase>
      </div>
    )
  }

  var clickPlus = function (e) {
    console.log('currentProduct:', currentProduct)
    if (!clicked) {
      setOutfit(pre => {
        return [...pre, currentProduct]
      })
      setCount(pre => pre + 1)
      findCurrentStyle(currentProduct.id)
    }

    setC(true)
  }

  var findCurrentStyle = function (id) {
    // console.log('currentstyle invoke after mounting', id)
    findstyleByid(id).then(res => {
      console.log('currentstyle invoke after mounting', id, res)
      setCurrS(pre => [...pre, res])
    })
  }

  useEffect(() => {
    // console.log('ONCE List of variable currentProduct',product);
    // findCurrentStyle(currentProduct.id)
  }, [])

  console.log('      check the clickplus',clicked)
  if (outfit.length > 0 && countClick === outfit.length) {
    console.log('in the first one')
    return (
      <div>
        <h4 className='title'> YOUR OUTFIT</h4>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size='3x'
          className='plusIcon'
          onClick={clickPlus}
          style={{position:'absolute',zIndex:'1'}}
        />
        <div className='slider'>
          <OutfitArrow
            outfit={outfit}
            countClick={countClick}
            currentStyle={currentStyle}
            imgStyles={imgStyles}
            style={style}
            rating={rating}
            product={product}
            setOutfit={setOutfit}
            setCount={setCount}
            setCurrS={setCurrS}
            setC={setC}
          />
        </div>
      </div>
    )
  } else {
    console.log('in the second one')
    return (
      <div className=''>
        <h4 className='title'> YOUR OUTFIT</h4>
        <div>
          <FontAwesomeIcon
            icon={faCirclePlus}
            size='3x'
            className='plusIcon'
            onClick={clickPlus}
            style={{position:'absolute',zIndex:'1'}}
          />
        </div>
      </div>
    )
  }
}

export default Outfit
