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
  const [related, setR] = useState([])
  const [discount, setDis] = useState(false)

  useEffect(() => {
    axios
      .get(
        'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/related',
        {
          // params: { page: 5, count: 1 },
          headers: {
            Authorization: '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'
          }
        }
      )
      .then(res => {
        console.log('Get post result before click:', res.data)
        axios
          .all(
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
          .then(result => {
            return result.map(item => {
              return item.data
            })
          })
          .then(res => {
            console.log('this is the data array default', res)
            setO(res)
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
    controlsContainer: '.controls',
    // prevButton:'#first-btn'
    // arrowKeys: true
  }

  var clickEvent = function (e) {
    var clickedId = e.target.attributes.getNamedItem('name').value

    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${clickedId}/related`,
        {
          headers: {
            Authorization: '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'
          }
        }
      )
      .then(res => {
        console.log('Get post result after click:', res.data);
        setR(res.data);
        return axios.all(
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
      })
      .then(result => {
        return result.map(item => item.data)
      })
      .then(res => {
        setO(res);
        return axios.all(
          related.map((item, index) => {
            return axios.get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${item}/styles`,
              {
                headers: {
                  Authorization: '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'
                }
              }
            )
          })
        )
      })
      .then((res) => {
        // if(related.length > 1){
          console.log('get products styles',related)
        // }

      })

  }

  if (obj) {
    return (
      <>
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
                    src={imgs}
                    data-src={imgs}
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
