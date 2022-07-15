import React, { useState, useEffect,memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import config from '../../../.config.js'
import ImgandButton from './SliderImgButton.jsx'

function Related (props) {
  const imgs =
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'

  const [product, setP] = useState([])
  const [discount, setDis] = useState(false)
  const [style, setStyle] = useState([])
  const [related, setR] = useState([])
  const [show, setShow] = useState(false)
  const [currentProduct, setCurrent] = useState({
    name: '',
    features: []
  })
  const [compareProduct, setCompare] = useState({
    name: '',
    features: []
  })
  const [leftArrow, setLeft] = useState(0)
  const [rightArrow, setRight] = useState(0)
  const [arrowDiff, setDiff] = useState(0)

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
        console.log('Related products for id:', res.data)
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
        .then(res => console.log('array of averages', res))
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
        console.log('current product', data.features)
        var f = data.features.map(item => item.value)
        setCurrent(pre => {
          return { ...pre, name: data.name, features: f }
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
          console.log('array of styles', res)
          setStyle(res)
        })
    })
  }, [])

  const imgStyles = {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
  }

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: false,
    items: 3,
    gutter: 20,
    edgePadding: 200,
    controls: true,
    controlsContainer: '.controls'
  }


  var closeModal = function (e) {
    setShow(false)
  }

  var arrowClick = function (e) {
    if (e.target.getAttribute('id') === 'first-btn') {
      setLeft(pre => pre + 1)
      var diff = rightArrow - leftArrow - 1
      setDiff(diff)
    } else {
      setRight(pre => pre + 1)
      var diff = rightArrow + 1 - leftArrow
      setDiff(diff)
    }
  }

  console.log(
    'product &&&&&& style ',
    product,
    style,
    'compare',
    currentProduct,
    compareProduct,
    rightArrow,
    leftArrow,
    console.log(config.TOKEN)
  )

  if (
    product.length > 1 &&
    style.length > 1 &&
    style.length === product.length
  ) {
    return (
      <>

        <div className='slider'>
          <TinySlider settings={settings}>
            {product.map((item, index) => {
              return (
                <section key={index}>
                 <ImgandButton item={item} style={style} index={index} imgs={imgs} imgStyles={imgStyles}/>
                  <p>{item.category}</p>
                  <h3>{item.name}</h3>
                  <p
                    style={
                      style[index].salePrice
                        ? {
                            textDecoration: 'line-through',
                            display: 'inline'
                          }
                        : null
                    }
                  >{`$${item.default_price}`}</p>
                  <p style={{ display: 'inline' }}>{style[index].salePrice}</p>
                  <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </section>
              )
            })}
          </TinySlider>
          <div className='controls'>
            <button
              onClick={arrowClick}
              id='first-btn'
              type='button'
              style={arrowDiff === 0 ? { display: 'none' } : null}
            >
              ❮
            </button>
            <button
              onClick={arrowClick}
              id='second-btn'
              type='button'
              style={
                arrowDiff === style.length - 3 ? { display: 'none' } : null
              }
            >
              ❯
            </button>
          </div>
        </div>

        <div
          className='modal-container'
          style={show ? null : { display: 'none' }}
        >
          <button onClick={closeModal}>×</button>
          <table>
            <thead>
              <tr>
                <th>{currentProduct.name}</th>
                <th className='centerText'>Characteristic</th>
                <th className='left-tick'>{compareProduct.name}</th>
              </tr>
            </thead>
            {currentProduct.features.map((item, index) => {
              {
                console.log('current modal window information', item)
              }
              if (item) {
                return (
                  <thead key={index}>
                    <tr>
                      <th>{currentProduct.features.includes(item) && '✔'}</th>
                      <th className='centerText'>{item}</th>
                      <th className='left-tick'>
                        {compareProduct.features.includes(item) && '✔'}
                      </th>
                    </tr>
                  </thead>
                )
              }
            })}
            {compareProduct.features.map((item, index) => {
              console.log(
                'modal window information',
                item,
                currentProduct.features.includes(item)
              )
              if (item && !currentProduct.features.includes(item)) {
                return (
                  <thead key={index}>
                    <tr key={index}>
                      <th>{currentProduct.features.includes(item) && '✔'}</th>
                      <th className='centerText'>{item}</th>
                      <th className='left-tick'>
                        {compareProduct.features.includes(item) && '✔'}
                      </th>
                    </tr>
                  </thead>
                )
              }
            })}
          </table>
        </div>
      </>
    )
  }
}

export default memo(Related)
