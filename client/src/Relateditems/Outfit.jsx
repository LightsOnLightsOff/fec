import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import Control from './SliderControl.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
// import OutfitImage from './OutfitImage.jsx'

function Outfit ({
  currentProduct,
  // settings,
  style,
  imgs,
  findstyleByid,
  outfit,
  setOutfit,
  currentStyle,
  setCurrS
}) {
  const [clicked,setC] = useState(false);
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: false,
    items: 4,
    gutter: 20,
    edgePadding: 200
    // controls: true,
    // controlsContainer: '.controls'
  }

  var clickPlus = function (e) {
    if(!clicked){
      setOutfit(pre => {

        return [...pre, [currentProduct]]
      })
    }
    console.log('currentProduct:',currentProduct)
    setC(true);
  }

  var findCurrentStyle = function (id) {
    findstyleByid(id).then(res => {
      console.log('currentstyle invoke after mounting', res)
      setCurrS(pre=>[...pre,res])
    })
  }

  useEffect(() => {
    // console.log('ONCE List of variable currentProduct', outfit,currentProduct);
    findCurrentStyle(currentProduct.id)
  }, [])

  console.log('      outfit before rendering', outfit)
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
        <TinySlider settings={settings}>
          {outfit.map((item, index) => {
            {/* console.log('Loop index and current photo',  index,currentStyle) */}
            return (
              <section key={index} className='outfitSlider'>
                <img
                  src={currentStyle[index].photo &&  currentStyle[index].photo }
                  style={index === 0 ? { display: 'none' } : imgStyles}
                  name={item.id}
                />
              </section>
            )
          })}
        </TinySlider>

        {/* <Control style={style} /> */}
      </div>
    </div>
  )
}

export default Outfit

