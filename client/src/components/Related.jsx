import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'

function Related (props) {
  const imgs =
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'

  const [obj, setO] = useState([])
  const [info, setInf] = useState({
    img: '',
    name: '',
    price: '',
    rating: ''
  })
  const [discount, setDis] = useState(false)
  const [style, setStyle] = useState([])
  const [related, setR] = useState([])

  var updateByid = function (id) {
    return axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
        {
          headers: {
            Authorization: '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'
          }
        }
      )
      .then(res => {
        console.log('Related products for id:', res.data)
        var related = res.data
        setR(related)
        var promise = axios.all(
          res.data.map((item, index) => {
            return axios.get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${item}`,
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
        console.log('combo', promise, related)
        var p = promise.then(item => {
          return item.map(item => item.data)
        })
        return { p, related }
      })
      .then(({ p, related }) => {
        p.then(res => {
          setO(res)
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
        console.log('get products styles', res.data.results)
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
        var price = allStyles[0].sale_price
        var photo = allStyles[0].photos[0].thumbnail_url
        return { price, photo }
      })
  }

  var updateStyle = function (id) {
    const obj = findstyleByid(id)

    console.log('obj+++++', id, obj)
    setStyle(pre => {
      console.log('previous style pushed to style array', pre)
      return [...pre, obj]
    })
  }


  useEffect(() => {
    updateByid(40344).then(related => {
      axios
        .all(
          related.map(item => {
            return findstyleByid(item)
          })
        )
        .then(res => {
          console.log('array of styles', res);
          setStyle(res);
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
    // prevButton:'#first-btn'
    // arrowKeys: true
  }

  var clickEvent = function (e) {
    setStyle([])
    var clickedId = e.target.attributes.getNamedItem('name').value
    console.log('I am clicking the picuture id:', clickedId)
    updateByid(clickedId)
    .then(related => {
      axios
        .all(
          related.map(item => {
            return findstyleByid(item)
          })
        )
        .then(res => {
          console.log('array of styles', res);
          setStyle(res);
        })
    })
  }
  console.log('&&&&&& result ', obj, style)
  if (obj.length > 1 && style.length > 1 && style.length === obj.length) {
    return (
      <>
        {/* {console.log('div=====', obj, style)} */}
        <div className='slider'>
          <div className='controls'>
            <button id='first-btn' type='button'>
              ❮
            </button>
            <button id='second-btn' type='button'>
              ❯
            </button>
          </div>

          <TinySlider settings={settings}>
            {/* <button id='this'>ffff</button> */}
            {obj.map((item, index) => {
              return (
                <section key={index} onClick={clickEvent}>
                  <img
                    className={`tns-lazy-img`}
                    // src={imgs}
                    data-src={style[index].photo ? style[index].photo : imgs}
                    style={imgStyles}
                    name={item.id}
                  />
                  <p>{item.category}</p>
                  <h3>{item.name}</h3>
                  <p
                    style={discount ? { textDecoration: 'line-through' } : null}
                  >{`$${item.default_price}`}</p>
                  <p>Rating Star....</p>
                </section>
              )
            })}
          </TinySlider>
        </div>
      </>
    )
  }
}

export default Related
{
  /* <section id='slider'> */
}
{
  /* <div className='container'>
  <div className='subcontainer'>
    <div className='slider-wrapper'>
      <div className='controller'>
        <div>
          <h2>RELATED PRODUCTS</h2>
        </div>
        <div id='controls'>
          <button className='previous'>❮ </button>
          <button className='next'>❯</button>
        </div>
        <br></br>
        <div className='my-slider'>
          <div>
            <div className='slide'>
              <div className='slide-img img-1'></div>
              <br></br>
              <div>
                <p>This is the title of photo</p>
              </div>
            </div>
          </div>
          <div>
            <div className='slide'>
              <div className='slide-img img-1'>
                <a href="#">Learn more</a>
              </div>
              <br></br>
              <div>
                <p>This is the title of photo</p>
              </div>
            </div>
          </div>
          <div>
            <div className='slide'>
              <div className='slide-img img-1'></div>
              <br></br>
              <div>
                <p>This is the title of photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
// </section>

// const imgs = [
//   'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
//   'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg',
//   'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
//   'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg',
//   'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
//   'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg'
// ]

// const loadingImage =
//   'data:image/gif;base64,\
// R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
