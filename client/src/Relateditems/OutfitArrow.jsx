import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ButtonBase from '@mui/material/ButtonBase'
import Link from '@mui/material/Link'
import { ColorRating } from './style.css/star.js'

class ReactCustomArrow extends React.Component {
  constructor (props) {
    super(props)
    this.state = { leftArrow: 0, rightArrow: 0, arrowDiff: 0 }
  }

  arrowClick (e) {
    // console.log('left arrow clicked', e.target.getAttribute('d'))
    if (
      e.target.getAttribute('data-testid') === 'ArrowLeftIcon' ||
      e.target.getAttribute('d') === 'm14 7-5 5 5 5V7z'
    ) {
      this.setState(prev => {
        return { leftArrow: prev.leftArrow + 1 }
      })
      var diff = this.state.rightArrow - this.state.leftArrow - 1
      this.setState({ arrowDiff: diff })
      return this.slider.slickPrev()
    } else {
      console.log('right arrow clicked', e.target)
      this.setState(prev => {
        return { rightArrow: prev.rightArrow + 1 }
      })
      var diff = this.state.rightArrow + 1 - this.state.leftArrow
      this.setState({ arrowDiff: diff })
      return this.slider.slickNext()
    }
  }

  renderArrows = () => {
    return (
      <div className='slider-arrow'>
        <ButtonBase
          className='arrow-btn prev'
          id='first-arrow'
          style={this.state.arrowDiff === 0 ? { display: 'none' } : null}
          onClick={this.arrowClick.bind(this)}
        >
          <ArrowLeftIcon />
        </ButtonBase>
        <ButtonBase
          className='arrow-btn next'
          style={
            this.state.arrowDiff <= this.props.outfit.length - 4
              ? null
              : { display: 'none' }
          }
          onClick={this.arrowClick.bind(this)}
        >
          <ArrowRightIcon />
        </ButtonBase>
      </div>
    )
  }
  render () {
    console.log('left and right ', this.state.leftArrow, this.state.rightArrow)
    if (
      this.props.outfit.length > 0 &&
      this.props.countClick === this.props.outfit.length
    ) {
      return (
        <div className='App'>
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            {this.renderArrows()}
            <Slider
              ref={c => (this.slider = c)}
              infinite={false}
              arrows={false}
              slidesToShow={3}
            >
              {this.props.outfit.map((item, index) => {
                {
                  console.log('Loop index and current photo', index, item)
                }
                return (
                  <section key={index} className='outfitSlider'>
                    <img
                      src={this.props.currentStyle[index].photo}
                      style={this.props.imgStyles}
                      name={item.id}
                    />
                    <p className='below-pic'>{item.detail.category}</p>
                    <h3 className='below-pic'>{item.detail.name}</h3>
                    <p
                      className='below-pic'
                      style={
                        this.props.style[index].salePrice
                          ? {
                              textDecoration: 'line-through',
                              display: 'inline'
                            }
                          : null
                      }
                    >
                      {`$${item.detail.default_price}`}
                    </p>
                    <p className='below-pic' style={{ display: 'inline' }}>
                      {this.props.style[index].salePrice}
                    </p>
                    <ColorRating
                      wid={`${(Math.floor((this.props.rating[index] / 5) * 4) /
                        4) *
                        100}%`}
                    >
                      <span className='thestar'>
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                    </ColorRating>
                  </section>
                )
              })}
            </Slider>
          </div>
        </div>
      )
    }
  }
}

export default ReactCustomArrow
