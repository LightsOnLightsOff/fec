import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  // console.log("TOTAL VALUES: ", totalValues)

  keys.forEach((key, index) => {
    totalKeyAndValues += (Number(key) * Number(values[index]))
  })

  // console.log("TOTAL KEY AND VALUE: ", totalKeyAndValues)
  const avgTotal = (totalKeyAndValues / totalValues).toFixed(1)
  const starAvg = (avgTotal * 100) / 5 + '%'
  //console.log("STAR AVG: ", starAvg)


  const recommendKeys = Object.values(recommended)
  var recommendTotal = 0
  recommendKeys.forEach((key, index) => {
    recommendTotal += Number(key)
  })
  console.log("recommendTotal: ", recommendTotal)



  return (
    <div className="stars">
      <h1>{avgTotal} <span className="starBaby">&#9733;&#9733;&#9733;&#9733;&#9733;</span></h1>

      {/* style={{ width: '70%' }} */}
      <h4>{Math.round((recommended['true'] / recommendTotal) * 100)}% of reviews recommend this product</h4>

      <StarBreakdown>
        <NumStar>5 stars</NumStar>
        <Breakdown> </Breakdown>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar>4 stars</NumStar>
        <Breakdown> </Breakdown>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar>3 stars</NumStar>
        <Breakdown> </Breakdown>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar>2 stars</NumStar>
        <Breakdown> </Breakdown>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar>1 stars</NumStar>
        <Breakdown> </Breakdown>
      </StarBreakdown>
    </div>
  )
}

export default Stars;


const StarBaby = styled.span`

`;

const StarBreakdown = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px


`;

const Breakdown = styled.span`
  width: 150px;
  height: 8px;
  border-width: thin;
  margin-top: 4px;
  margin-left: 10px;
  background-color: #ddd

`;

const NumStar = styled.p`
margin: 0px;
padding: 0px
padding-right: 5px;
text-decoration: underline;

`
