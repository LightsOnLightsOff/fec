import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'

function Related (props) {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/related', {
      // params: { page: 5, count: 1 },
      headers: {
        Authorization: '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'
      }
    })
    .then(res => {
      console.log('this is the response', res.data)
    })

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
    items: 4,
    gutter: 20,
    edgePadding: 200,
    controls: true,
    controlsContainer: '.controls'
    // prevButton:'#first-btn'
  }

  const loadingImage =
    'data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

  const imgs = [
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg',
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg',
    'https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg'
  ]

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
        <button id="this">ffff</button>
        <TinySlider settings={settings}>
          {imgs.map((item, index) => {
            return (
              <div key={index} style={{ position: 'relative' }}>
                <img
                  className={`tns-lazy-img`}
                  src={loadingImage}
                  data-src={item}
                  style={imgStyles}
                />
              </div>
            )
          })}
        </TinySlider>
      </div>
    </>
  )
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
