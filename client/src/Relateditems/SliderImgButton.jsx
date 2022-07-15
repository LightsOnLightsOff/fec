import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var clickStar = function (item) {
  setShow(true)
  console.log('modal window for comparison', item.features)
  var f = item.features.map(obj => obj.value)
  setCompare({ name: item.name, features: f })
}

var clickProduct = function (e) {
  setLeft(0)
  setRight(0)
  setDiff(0)
  setStyle([])
  var clickedId = e.target.attributes.getNamedItem('name').value
  console.log('I am clicking the picuture id:', clickedId)
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

function ImgButton ({item,style,index,imgs,imgStyles}) {
  return (
    <div>
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
    </div>
  )
}

export default ImgButton
