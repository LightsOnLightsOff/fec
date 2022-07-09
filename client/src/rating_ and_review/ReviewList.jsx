import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Review from './Review.jsx'


function ReviewList(props) {

  const [product, setProduct] = useState('')
  //need to slice the data by 2
  //var productBy2 = product.slice(0,2)
  // console.log("product sliced by 2: ", productBy2)
  //create a function that will increment the data by 2, if hit max, remove button

/* Everytime the user clicks on a related products, state changes in the index.jsx and will pass down the new product_id */

 useEffect(() => {
  const getData = async () => {
    const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        Authorization: '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'
      }
    }) //end of axios get req
    const newData = await response.data
    //set the state
    setProduct(newData)
  }
  //invoke the getData
  getData()
  //catch the errors
  .catch((err) => {
    console.log("ERROR: ", err)
  })

 }, [props.id]) // use a dependency array, so that we only run this useEffect when id changes


  // .then(res => {
  //   console.log('this is the response', res.data)
  //   //setProduct(res.data.results)
  // })
 console.log('new product data',product)


  if (product) {
    return (
      <div>
        <h1>Rating and Reviews</h1>
        {/* {product.map((each) => {
          return <Review></Review>
        })} */}

      </div>
    )

  }
}

export default ReviewList;