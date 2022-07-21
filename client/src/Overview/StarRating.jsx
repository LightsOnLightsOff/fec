import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../config.js'

function StarRating (props) {

  const [rate, setRatings] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40355', {
        headers: {
          Authorization: config.TOKEN
        }
      }) //end of axios get req
      const newData = await response.data

      //useState to update
      // console.log("We got data from ratings in Brandon's file!: ", newData.ratings)
      setRatings(newData.ratings)

    }
    //invoke the getData
    getData()
      //catch the errors
      .catch((err) => {
        console.log("ERROR: ", err)
      })

  }, []) //<--add props.id here

  // console.log("RATE IN STARS: ", rate)

  // console.log("RATe: ", rate)

  // console.log("STAR AVG: ", starAvg)


  // const recommendKeys = Object.values(recommended)
  // var recommendTotal = 0
  // recommendKeys.forEach((key, index) => {
  //   recommendTotal += Number(key)
  // })
  // // console.log("recommendTotal: ", recommendTotal)
  // var totalStars = 0
  // values.forEach((key) => {
  //   totalStars += Number(key)
  // })



  // const eachStar = values.map((each) => {
  //   return Math.round((each * 100) / totalStars) + "%"
  // })

  //  console.log("TOTAL  Each STARS: ", eachStar)


  if (Object.keys(rate).length > 0) {
    // console.log("STAR COME OUT TO PLAY")
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
  return (
    <div className="stars">
      <h1><StarBaby starAvg={starAvg} >&#9733;&#9733;&#9733;&#9733;&#9733;</StarBaby></h1>

    </div>
  )
  }
}

export default StarRating;

// const StarBabyAfter = styled.

const StarBaby = styled.span`

  display: inline-block;
  position: relative;
  font-size: 30px;
  border-radius: 7px;
  color: #bebebe;
  &:after {
    content: "\\2B50\\2B50\\2B50\\2B50\\2B50";
    padding-top: 3px;

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

