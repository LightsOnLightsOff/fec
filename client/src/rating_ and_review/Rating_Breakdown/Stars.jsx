import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Stars({ rate, recommended, filterByStar}) {

  console.log("RATE IN STARS: ", rate)

  // console.log("RATe: ", rate)
  const keys = Object.keys(rate)
  const values = Object.values(rate)
  console.log("KEYS: ", keys, "VALUES: ", values)
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
  var totalStars = 0
  values.forEach((key) => {
    totalStars += Number(key)
  })

console.log("MATH FOR TOTAL STARS: ", totalStars)

  const eachStar = values.map((each) => {
    return Math.round((Number(each) * 100) / totalStars) + "%"
  })

   console.log("TOTAL  Each STARS: ", eachStar)



  return (
    <div className="stars">
      <h1>{avgTotal} <StarBaby starAvg={starAvg} >&#9733;&#9733;&#9733;&#9733;&#9733;</StarBaby></h1>

      {/* style={{ width: '70%' }} */}
      <h4>{Math.round((recommended['true'] / recommendTotal) * 100)}% of reviews recommend this product</h4>

      <StarBreakdown>
        <NumStar onClick={() => {filterByStar(5)}}>5 stars</NumStar>
        <Container>
        <Breakdown starAvg={eachStar[4]}> </Breakdown>
        </Container>
        <Num>{values[4]}</Num>


      </StarBreakdown>
      <StarBreakdown>
        <NumStar onClick={() => {filterByStar(4)}}>4 stars</NumStar>
        <Container>
        <Breakdown starAvg={eachStar[3]}> </Breakdown>
        </Container>
        <Num>{values[3]}</Num>


      </StarBreakdown>
      <StarBreakdown>
        <NumStar onClick={() => {filterByStar(3)}}>3 stars</NumStar>
        <Container>
        <Breakdown starAvg={eachStar[2]}> </Breakdown>
        </Container>
        <Num>{values[2]}</Num>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar onClick={() => {filterByStar(2)}}>2 stars</NumStar>
        <Container>
        <Breakdown starAvg={eachStar[1]}> </Breakdown>
        </Container>
        <Num>{values[1]}</Num>
      </StarBreakdown>
      <StarBreakdown>
        <NumStar onClick={() => {filterByStar(1)}}>1 stars</NumStar>
        <Container>
        <Breakdown starAvg={eachStar[0]}> </Breakdown>
        </Container>
        <Num>{values[0]}</Num>
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

  border-radius: 7px;
  color: #bebebe;
  &:after {
    content: "\\2B50\\2B50\\2B50\\2B50\\2B50";
    padding-top: 1.5px;

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
  padding-bottom: 17px;
  padding-top: 14px;



`;
/**

    left: -20;
    right: 0px;
    left: -30;
    left: -20px;
    top: 2px;

 */

const Num = styled.p`
font-size: 15px;
padding: 0px;
margin-top: 0px;
margin-bottom: 0px;

`;

const Container = styled.div`
width: 230px;
height: 17px;
position: relative;
background-color: #ddd;
border-radius: 5px;

left: -20;
    right: 0px;
    left: -30;
    left: -20px;
    top: 4px;


`;

//&:after {

//   background-color: blue;
//   width: 200px;

//   left: 0;
//   top: 0;

//   overflow: hidden;
// }


const Breakdown = styled.span`
  width: ${props => {return props.starAvg}};
  height: 17px;
  border-width: thin;
  border-radius: 5px;
  background-color: #f80;
  position: absolute;

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
&:hover {
  cursor: pointer;
}

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

