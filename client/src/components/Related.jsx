import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Related (props) {
  const imgs =
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'

  const [product, setP] = useState([])
  const [info, setInf] = useState({
    img: '',
    name: '',
    salePrice: '',
    rating: ''
  })
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

  var getRelatedProduct = function (id) {
    return axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
      {
        headers: {
          Authorization: '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'
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
                  Authorization: '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'
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
            Authorization: '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'
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
                  Authorization: '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'
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

  var findFeature = function (which, id) {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
        {
          headers: {
            Authorization: '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'
          }
        }
      )
      .then(({ data }) => {
        console.log('current product', data.features)
        if (which === 'current') {
          setCurrent(pre => {
            return { ...pre, name: data.name, features: data.features }
          })
        } else {
          setCompare(pre => {
            return { ...pre, name: data.name, features: data.features }
          })
        }
      })
  }

  useEffect(() => {
    findFeature('current', 40344)
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

  var clickProduct = function (e) {
    setStyle([])
    var clickedId = e.target.attributes.getNamedItem('name').value
    console.log('I am clicking the picuture id:', clickedId)
    findFeature('current', clickedId)
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
    console.log('modal window for comparison', item.features)
    setCompare({ name: item.name, features: item.features })
  }

  var closeModal = function (e) {
    setShow(false)
  }

  console.log(
    'product &&&&&& style ',
    product,
    style,
    'compare',
    currentProduct,
    compareProduct
  )
  if (
    product.length > 1 &&
    style.length > 1 &&
    style.length === product.length
  ) {
    return (
      <>
        <div className='slider'>
          <TinySlider settings={settings}  >
            {product.map((item, index) => {
              return (
                <section key={index}>
                  <button
                    id='fav-1'
                    onClick={() => {
                      clickStar(item)
                    }}
                    name={item.name}
                  >
                    ☆
                  </button>
                  <img
                    onClick={clickProduct}
                    className={`tns-lazy-img`}
                    data-src={style[index].photo ? style[index].photo : imgs}
                    style={imgStyles}
                    name={item.id}
                  />
                  <p >{item.category}</p>
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
                  <FontAwesomeIcon icon={faStar} />
                </section>
              )
            })}
          </TinySlider>

          <div className='controls'>
            <button id='first-btn' type='button'>
              ❮
            </button>
            <button id='second-btn' type='button'>
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
            <thead>
              {currentProduct.features.map((item, index) => {
                {
                  /* console.log('modal window information', item) */
                }
                return (
                  <tr key={index}>
                    <th>{currentProduct.features.includes(item) && '✔'}</th>
                    <th className='centerText'>{item.value}</th>
                    <th className='left-tick'>
                      {compareProduct.features.includes(item) && '✔'}
                    </th>
                  </tr>
                )
              })}
              {compareProduct.features.map((item, index) => {
                console.log('modal window information', item)
                if (item.value) {
                  return (
                    <tr key={index}>
                      <th>{currentProduct.features.includes(item) && '✔'}</th>
                      <th className='centerText'>{item.value}</th>
                      <th className='left-tick'>
                        {compareProduct.features.includes(item) && '✔'}
                      </th>
                    </tr>
                  )
                }
              })}
            </thead>
          </table>
        </div>
      </>
    )
  }
}

export default Related
