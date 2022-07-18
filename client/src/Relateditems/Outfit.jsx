import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import Control from './SliderControl.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import config from '../../../.config.js'
// import OutfitImage from './OutfitImage.jsx'

function Outfit ({
  currentProduct,
  settings,
  style,
  imgs,
  findstyleByid,
  outfit,
  setOutfit
}) {
  // const [outfit, setOutfit] = useState([{ 0: 'button' }])
  const [currentStyle, setCurrS] = useState({ salePrice: '', photo: '' })
  const [clicked,setC] = useState(false);
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }

  var clickPlus = function (e) {
    if(!clicked){
      setOutfit(pre => {

        return [...pre, [currentProduct]]
      })
    }
    console.log('     currentProduct:',currentProduct)
    setC(true);
  }

  var findCurrentStyle = function (id) {
    findstyleByid(id).then(res => {
      console.log('currentstyle', res)
      setCurrS(res)
    })
  }

  useEffect(() => {
    // console.log('ONCE List of variable currentProduct', outfit,currentProduct);
    findCurrentStyle(currentProduct.id)
  }, [])

  console.log('      outfit', outfit)
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
            console.log('outfittttt',  index,currentStyle.photo)
            return (
              <section key={index} className='outfitSlider'>
                <img
                  // onClick={clickProduct}
                  className={`tns-lazy-img`}
                  data-src={currentStyle.photo &&  currentStyle.photo }
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

