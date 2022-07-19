import React, { useState, useEffect, memo, Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
import ImgandButton from './SliderImgButton.jsx'
import Description from './SliderDescription.jsx'
import Control from './SliderControl.jsx'
import Modal from './Modalwindow.jsx'
import Outfit from './Outfit.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css";

function Related (props) {
  const imgs =
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'

  const [product, setP] = useState([])
  const [discount, setDis] = useState(false)
  const [style, setStyle] = useState([])
  const [related, setR] = useState([])
  const [show, setShow] = useState(false)
  const [rating, setRating] = useState([])
  const [leftArrow, setLeft] = useState(0)
  const [rightArrow, setRight] = useState(0)
  const [arrowDiff, setDiff] = useState(0)
  const [currentProduct, setCurrent] = useState({
    name: '',
    features: []
  })
  const [compareProduct, setCompare] = useState({
    id: '',
    name: '',
    features: [],
    detail: []
  })
  // const [outfit, setOutfit] = useState([[{ detail:{category: '',name:''} }]])
  const [outfit, setOutfit] = useState([]);
  const [currentStyle, setCurrS] = useState([])
  const [countClick,setCount] = useState(0)

  var getRelatedProduct = function (id) {
    return axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
      {
        headers: {
          Authorization: config.TOKEN
        }
      }
    )
  }

  var updateProductByid = function (id) {
    return getRelatedProduct(id)
      .then(res => {
        // console.log('Related products for id:', res.data)
        var related = res.data
        setR(related)
        var promise = axios.all(
          res.data.map((eachProduct, index) => {
            return axios.get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${eachProduct}`,
              {
                headers: {
                  Authorization: config.TOKEN
                }
              }
            )
          })
        )
        return { promise, related }
      })
      .then(({ promise, related }) => {
        // console.log('combo', promise, related)
        var p = promise.then(item => {
          return item.map(item => item.data)
        })
        return { p, related }
      })
      .then(({ p, related }) => {
        p.then(res => {
          setP(res)
        })
        return related
      })
  }

  var findstyleByid = function (id) {
    return axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
        {
          headers: {
            Authorization: config.TOKEN
          }
        }
      )
      .then(res => {
        // console.log('get products styles', res.data.results)
        var eachStyle = res.data.results
        var allStyles = eachStyle.map((item, index) => {
          if (index !== eachStyle.length - 1) {
            if (item['default?']) {
              return item
            }
          }
          return eachStyle[0]
          //  console.log('when we filter the default style',eachStyle,item['default?']);
        })
        var salePrice = allStyles[0].sale_price
        var photo = allStyles[0].photos[0].thumbnail_url
        return { salePrice, photo }
      })
  }

  var findReviewById = function (id) {
    getRelatedProduct(id).then(({ data }) =>
      axios
        .all(
          data.map(review =>
            axios.get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`,
              {
                params: { product_id: review },
                headers: {
                  Authorization: config.TOKEN
                }
              }
            )
          )
        )
        .then(res => {
          return res.map(item => item.data.results)
        })
        .then(array => {
          // console.log('review array to calculate average rating', array)
          return array.map(allreview => {
            var total = 0
            allreview.map(obj => {
              total += obj.rating
              // console.log('obj.rating',typeof total);
            })
            return total / allreview.length
          })
        })
        .then(res => {
          // console.log('array of averages', res)
          setRating(res)
        })
    )
  }

  var findFeature = function (id) {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
        {
          headers: {
            Authorization: config.TOKEN
          }
        }
      )
      .then(({ data }) => {
        // console.log('product feature of current product', data.features)
        var f = data.features.map(item => item.value)
        setCurrent(pre => {
          return { ...pre, name: data.name, features: f, detail: data, id: id }
        })
      })
  }

  useEffect(() => {
    findFeature(40344)
    findReviewById(40344)
    updateProductByid(40344).then(related => {
      axios
        .all(
          related.map(item => {
            return findstyleByid(item)
          })
        )
        .then(res => {
          // console.log('THIS IS ONCE array of styles', res)
          setStyle(res)
        })
    })
  }, [])

  var clickProduct = function (e) {
    setLeft(0)
    setRight(0)
    setDiff(0)
    setStyle([])
    var clickedId = e.target.attributes.getNamedItem('name').value
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
          console.log('array of styles', res)
          setStyle(res)
        })
    })
  }

  var clickStar = function (item) {
    setShow(true)
    // console.log('modal window for comparison', item.features)
    var f = item.features.map(obj => obj.value)
    setCompare({ name: item.name, features: f })
  }

  var closeModal = function (e) {
    setShow(false)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  // console.log('product &&&&&& style ', product, style, currentProduct)

  if (
    product.length > 1 &&
    style.length > 1 &&
    style.length === product.length
  ) {
    return (
      <div>
        <h4 className='title'>RELATED PRODUCTS</h4>
        <div className='slider'>
        <Slider {...settings}>
            {product.map((item, index) => {
              {/* console.log('####Loop through index and style',index,style) */}
              return (
                <section key={index}>
                  <ImgandButton
                    item={item}
                    style={style}
                    index={index}
                    imgs={imgs}
                    clickProduct={clickProduct}
                    clickStar={clickStar}
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
          <Control style={style} />
        </div>
        <Modal
          currentProduct={currentProduct}
          compareProduct={compareProduct}
          closeModal={closeModal}
          show={show}
        />
        <Outfit
          currentProduct={currentProduct}
          // settings={settings}
          findstyleByid={findstyleByid}
          clickProduct={clickProduct}
          imgs={imgs}
          style={style}
          outfit={outfit}
          setOutfit={setOutfit}
          currentStyle={currentStyle}
          setCurrS={setCurrS}
          rating={rating}
          countClick={countClick}
          setCount={setCount}
        />
      </div>
    )
  }
}

export default memo(Related)
