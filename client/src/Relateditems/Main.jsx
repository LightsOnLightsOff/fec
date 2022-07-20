import React, { useState, useEffect, useContext, createContext, memo, Component, useRef } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config.js'
import {UserContext} from '../index.jsx';
import { Control } from './SliderControl.jsx'
import Modal from './Modalwindow.jsx'
import Outfit from './Outfit.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Related (props) {
  const imgs =
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'

  const [product, setP] = useState([])
  const [discount, setDis] = useState(false)
  const [style, setStyle] = useState([])
  const [related, setR] = useState([])
  const [show, setShow] = useState(false)
  const [rating, setRating] = useState([])

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
  const [outfit, setOutfit] = useState([])
  const [currentStyle, setCurrS] = useState([])
  const [countClick, setCount] = useState(0)

  const productPassing = useContext(UserContext);

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

  var clickStar = function (item) {
    setShow(true)
    // console.log('modal window for comparison', item.features)
    var f = item.features.map(obj => obj.value)
    setCompare({ name: item.name, features: f })
  }

  var closeModal = function (e) {
    setShow(false)
  }

  // console.log('product in main',product)

  if (
    product.length > 1 &&
    style.length > 1 &&
    style.length === product.length
  ) {
    return (
      <div>
        <Control
          style={style}
          product={product}
          imgs={imgs}
          clickStar={clickStar}
          rating={rating}
          setStyle={setStyle}
          findFeature={findFeature}
          updateProductByid={updateProductByid}
          findstyleByid={findstyleByid}
        />
        <Modal
          currentProduct={currentProduct}
          compareProduct={compareProduct}
          closeModal={closeModal}
          show={show}
        />
        <Outfit
          currentProduct={currentProduct}
          findstyleByid={findstyleByid}
          imgs={imgs}
          style={style}
          outfit={outfit}
          setOutfit={setOutfit}
          currentStyle={currentStyle}
          setCurrS={setCurrS}
          rating={rating}
          countClick={countClick}
          setCount={setCount}
          product={product}
        />
      </div>
    )
  }
}

export default memo(Related)
