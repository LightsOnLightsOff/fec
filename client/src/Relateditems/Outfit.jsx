import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import Control from './SliderControl.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../.config.js'
import OutfitImage from './OutfitImage.jsx'

function Outfit ({ currentProduct, settings }) {
  const [outfit, setOutfit] = useState([{ 0: 'button' }])

  var clickPlus = function () {
    setOutfit(pre => {
      if (!pre.includes([currentProduct])) {
        return [...pre, [currentProduct]]
      }
    })
  }

  useEffect(() => {
    console.log('List of outfit', outfit)
  }, [])

  return (
    <div>
      <h4 className='title'> YOUR OUTFIT</h4>
      <div className='outfitSlider'>
        <TinySlider settings={settings}>
          {outfit.map((item, index) => {
            if (index === 0) {
              console.log('item and index', item, index)
              return (
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size='3x'
                  className='plus-button'
                  onClick={clickPlus}
                  key={index}
                />
              )
            } else {
              console.log('index is not 0', outfit)
              return (
                <div key={index}>
                  <p>wolunlunnnnn</p>
                </div>
              )
            }
          })}
        </TinySlider>

        {/* <Control style={style} /> */}
      </div>
    </div>
  )
}

export default Outfit
