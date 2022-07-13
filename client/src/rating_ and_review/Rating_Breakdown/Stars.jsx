import React, { useState, useEffect } from 'react';

function Stars({ rate, recommended }) {

  // console.log("RATe: ", rate)
  const keys = Object.keys(rate)
  const values = Object.values(rate)
  // console.log("KEYS: ", keys, "VALUES: ", values)
  var totalValues = 0
  var totalKeyAndValues = 0
  values.forEach((key, index) => {
    totalValues += Number(key)
  })
  console.log("TOTAL VALUES: ", totalValues)

  keys.forEach((key, index) => {
    totalKeyAndValues += (Number(key) * Number(values[index]))
  })

  console.log("TOTAL KEY AND VALUE: ", totalKeyAndValues)
  const avgTotal = (totalKeyAndValues / totalValues).toFixed(1)
  const starAvg = (avgTotal * 100) / 5 + '%'
  console.log("STAR AVG: ", starAvg)
  return (
    <div className="stars">
      <h1>{avgTotal}</h1>
      <span style={{ width: starAvg }} className="starBaby">&#9733;&#9733;&#9733;&#9733;&#9733;</span>

    </div>
  )
}

export default Stars;