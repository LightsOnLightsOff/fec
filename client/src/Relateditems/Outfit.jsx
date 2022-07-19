import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import Control from './SliderControl.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
import { ColorRating } from './style.css/star.js'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

  const settings = {
    infinite:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
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
          <Slider {...settings}>
            {outfit.map((item, index) => {
              {
                console.log('Loop index and current photo', index, item)
              }
              return (
                <section key={index} className='outfitSlider'>
                  <img
                    src={currentStyle[index].photo}
                    style={imgStyles}
                    name={item.id}
                  />
                  <p className='below-pic'>{item.detail.category}</p>
                  <h3 className='below-pic'>{item.detail.name}</h3>
                  <p
                    className='below-pic'
                    style={
                      style[index].salePrice
                        ? {
                            textDecoration: 'line-through',
                            display: 'inline'
                          }
                        : null
                    }
                  >
                    {`$${item.detail.default_price}`}
                  </p>
                  <p className='below-pic' style={{ display: 'inline' }}>
                    {style[index].salePrice}
                  </p>
                  <ColorRating
                    wid={`${(Math.floor((rating[index] / 5) * 4) / 4) * 100}%`}
                  >
                    <span className='thestar'>
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                  </ColorRating>
                </section>
              )
            })}
          </Slider>
          {/* <Control style={style} /> */}
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
