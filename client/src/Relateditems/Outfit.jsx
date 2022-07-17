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
  control,
  style,
  clickProduct,
  imgs
}) {
  const [outfit, setOutfit] = useState([{ 0: 'button' }])
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }

  var clickPlus = function () {
    setOutfit(pre => {
      return [...pre, [currentProduct]]
    })
  }

  useEffect(() => {
    console.log('List of current', currentProduct)
  }, [])

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
            console.log('outfittttt', outfit[index])
            return (
              <section key={index} className='outfitSlider'>
                <img
                  onClick={clickProduct}
                  className={`tns-lazy-img`}
                  data-src={style[index].photo ? style[index].photo : imgs}
                  style={imgStyles}
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
// if (index === 0) {
//   console.log('item and index',item,index)
//   return (
//     <FontAwesomeIcon
//       icon={faCirclePlus}
//       size='3x'
//       className='plus-button'
//       onClick={clickPlus}
//       key={index}
//     />
//   )
// }
// else {
//   console.log('index is not 0',index,item)
//   return (
//     <section key={index}>
//     <p>wolunlun</p>
//     </section>
//   )
// }
