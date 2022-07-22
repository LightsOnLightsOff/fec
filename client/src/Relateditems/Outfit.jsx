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

  var clickPlus = function (e) {
    console.log('currentProduct:', currentProduct)
    if (!clicked) {
      setOutfit(pre => {
        // console.log('previous outfit',pre)
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
      // console.log('currentstyle invoke after mounting', id, res)
      setCurrS(pre => [...pre, res])
    })
  }

  useEffect(() => {
    // console.log('ONCE List of variable currentProduct',product);
  }, [clicked])

  // console.log('check the useeffect', outfit,countClick)
  if (outfit.length > 0 && countClick === outfit.length) {
    // console.log('in the first one')
    return (
      <div className='the-whole-outfit'>
        <h4 className='title'> YOUR OUTFIT</h4>
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
            clickPlus={clickPlus}
          />
        </div>
      </div>
    )
  }
  // else {
  //   console.log('in the second one')
  //   return (
  //     <div >
  //       <h4 className='title'> YOUR OUTFIT</h4>
  //       <div style={{zIndex:'1',position:'absolute',marginLeft:'300px'}}>
  //         <FontAwesomeIcon
  //           icon={faCirclePlus}
  //           size='3x'
  //           className='plusIcon'
  //           onClick={clickPlus}
  //           style={{ position: 'absolute', zIndex: '1' }}
  //         />
  //       </div>
  //     </div>
  //   )
  // }
}

export default Outfit
