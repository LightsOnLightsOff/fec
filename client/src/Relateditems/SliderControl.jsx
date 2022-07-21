import React, { useState, useEffect,useContext, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ButtonBase from '@mui/material/ButtonBase'
import Slider from 'react-slick'
import ImgandButton from './SliderImgButton.jsx'
import Description from './SliderDescription.jsx'
import CardContent from '@mui/material/CardContent';
import {UserContext} from '../index.jsx';
import config from '../../../config.js'

export function Control ({
  style,
  product,
  imgs,
  clickStar,
  rating,
  setStyle,
  findFeature,
  updateProductByid,
  findstyleByid,

}) {
  const [mainLeft, setLeft] = useState(0)
  const [mainRight, setRight] = useState(0)
  const [mainDiff, setDiff] = useState(0)
  const sliderRef = React.useRef()
  const {setProductInfo} = useContext(UserContext);

  function clickProduct (e) {
    setLeft(0)
    setRight(0)
    setDiff(0)
    setStyle([])
    var clickedId = e.target.attributes.getNamedItem('name').value

    axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${clickedId}`,
      {
        headers: {
          Authorization: config.TOKEN
        }
      }
    )
    .then(res=>setProductInfo({id:clickedId,name:res.data.name}))
    // console.log('I am clicking the picuture id:', clickedId)
    findFeature(clickedId)
    updateProductByid(clickedId).then(related => {
      axios
        .all(
          related.map(item => {
            return findstyleByid(item)
          })
        )
        .then(res => {
          // console.log('array of styles', res)
          setStyle(res)
        })
    })
  }
  const settings = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ref: sliderRef,
    rows: 1
  }

  var arrowClick = function (e) {
    // console.log('clicked the arrow ', e.target)
    if (
      e.target.getAttribute('data-testid') === 'ArrowLeftIcon' ||
      e.target.getAttribute('d') === 'm14 7-5 5 5 5V7z'
    ) {
      setLeft(pre => pre + 1)
      var diff = mainRight - mainLeft - 1
      setDiff(diff)
      return sliderRef.current.slickPrev()
    } else {
      setRight(pre => pre + 1)
      var diff = mainRight + 1 - mainLeft
      setDiff(diff)
      return sliderRef.current.slickNext()
    }
  }

  var renderArrows = () => {
    return (
      <div >
        <ButtonBase
          className='arrow-btn prev'

          style={mainDiff === 0 ? { display: 'none' } : null}
          onClick={arrowClick}
        >
          <ArrowLeftIcon sx={{ fontSize: "80px" }} />

        </ButtonBase>
        <ButtonBase
          className='arrow-btn next'
          // id='main-right'
          style={mainDiff <= product.length - 4 ? null : { display: 'none' }}
          onClick={arrowClick}
        >
          <ArrowRightIcon sx={{ fontSize: "80px" }}/>
        </ButtonBase>
      </div>
    )
  }

  return (
    <div>
      <h4 className='title'>RELATED PRODUCTS</h4>
      <div className='slider'>
        {renderArrows()}
        <Slider {...settings}>

          {product.map((item, index) => {
            {
               {/* console.log('####Loop through index and style',index,style) */}
            }
            return (

              <section key={index} className="main-card">
                <ImgandButton
                  item={item}
                  style={style}
                  index={index}
                  imgs={imgs}
                  clickProduct={clickProduct}
                  clickStar={clickStar}
                  product={product}
                />
                <Description
                  item={item}
                  style={style}
                  index={index}
                  rating={rating}
                />
              </section>

            )
          })}

        </Slider>
      </div>
    </div>
  )
}

// var arrowClick = function (e) {
//   if (e.target.getAttribute('id') === 'first-btn') {
//     setLeft(pre => pre + 1)
//     var diff = rightArrow - leftArrow - 1
//     setDiff(diff)
//   } else {
//     setRight(pre => pre + 1)
//     var diff = rightArrow + 1 - leftArrow
//     setDiff(diff)
//   }
// }

// return (
//   <div>
//     <div className='controls'>
//       <button
//         onClick={arrowClick}
//         id='first-btn'
//         type='button'
//         style={arrowDiff === 0 ? { display: 'none' } : null}
//       >
//         ❮
//       </button>
//       <button
//         onClick={arrowClick}
//         id='second-btn'
//         type='button'
//         style={arrowDiff === style.length - 3 ? { display: 'none' } : null}
//       >
//         ❯
//       </button>
//     </div>
//   </div>
// )
