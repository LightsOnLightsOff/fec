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
  imgs,
  findstyleByid
}) {
  const [outfit, setOutfit] = useState([{ 0: 'button' }])
  const [currentStyle, setCurrS] = useState({ salePrice: '', photo: '' })
  const [clicked,setC] = useState(false);
  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
    // position: 'absolute'
  }

  var clickPlus = function () {
    if(!clicked){
      setOutfit(pre => {
        return [...pre, [currentProduct]]
      })
    }
    console.log('currentProduct.id',currentProduct.id)
    setC(true);
  }

  var findCurrentStyle = function (id) {
    findstyleByid(id).then(res => {
      console.log('currentstyle', res)
      setCurrS(res)
    })
  }

  useEffect(() => {
    console.log('List of current', currentProduct);
    findCurrentStyle(currentProduct.id)
  }, [])

  console.log('styleof localllll', currentStyle.photo)
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
            console.log('outfittttt', item[0], index,currentStyle.photo)

            return (
              <section key={index} className='outfitSlider'>
                <img
                  onClick={clickProduct}
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
