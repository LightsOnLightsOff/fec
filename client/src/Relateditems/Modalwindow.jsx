import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Modal ({currentProduct,compareProduct,closeModal,show}) {
  // useEffect(()=>console.log('ONCE MODAL'),[])

  return (
    <div className='modal-container' style={show ? null : { display: 'none' }}>
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
            {/* console.log('current modal window information', item) */}
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
          {/* console.log(
            'modal window information',
            item,
            currentProduct.features.includes(item)
          ) */}
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
  )
}

export default memo(Modal)
