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
  // console.log("STAR AVG: ", starAvg)


  const recommendKeys = Object.values(recommended)
  var recommendTotal = 0
  recommendKeys.forEach((key, index) => {
    recommendTotal += Number(key)
  })
  // console.log("recommendTotal: ", recommendTotal)



  return (
    <div className="stars">
      <h1>{avgTotal} <StarBaby starAvg={starAvg} >&#9733;&#9733;&#9733;&#9733;&#9733;</StarBaby></h1>

      {/* style={{ width: '70%' }} */}
      <h4>{Math.round((recommended['true'] / recommendTotal) * 100)}% of reviews recommend this product</h4>

      <StarBreakdown>
        <NumStar>5 stars</NumStar>
        <Breakdown> </Breakdown>
        {/* <AnotherBreakDown></AnotherBreakDown> */}
      </StarBreakdown>
      <StarBreakdown>
        <NumStar>4 stars</NumStar>
        <Breakdown> </Breakdown>
        {/* <AnotherBreakDown></AnotherBreakDown> */}
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

// const StarBabyAfter = styled.

const StarBaby = styled.span`
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: #ddd;
  &:after {
    content: "\\2605\\2605\\2605\\2605\\2605";
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => {return props.starAvg}};
    overflow: hidden;
    color: #f80;
  }

`;

const StarBreakdown = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px


`;

const Breakdown = styled.span`
  width: 200px;
  height: 8px;
  border-width: thin;
  margin-top: 4px;
  margin-left: 10px;
  background-color: #ddd;
  &:after {
    position: relative;
    background-color: black;
    width: 200px;
    height: 8px;
    left: 0;
    top: 0;

    overflow: hidden;
  }
`;
// position: absolute;
//     left: 0;
//     top: 0;
//     background-color: black;
//     width: 200px;
//     height: 8px;
const AnotherBreakDown = styled(Breakdown)`
position: relative;
background-color: black;
right: 120px;
width: 50%


`;

const NumStar = styled.p`
margin: 0px;
padding: 0px;
width: 90px;
text-decoration: underline;

`

const SizeFit = styled(Breakdown)`
width: 79px;
padding-right: 0px;
margin: 3px;
margin-bottom: 0px
`;

const Size = styled.p`
margin: 0px;
margin-top: 15px;

`;
const BigComfort = styled(StarBreakdown)`
justify-content: space-between;
`;

const Comfort = styled.p`
font-size: 12px;
padding: 0px;
margin-top: 0px;
padding-right: 30px;

`;

