import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Review from './Review.jsx'


function ReviewList(props) {

  const [displayButton, setDisplayButton] = useState(true) //display button only if there are more reviews
  //const [count, setCount] = useState(0) //this will display two reviews at a time
  const [product, setProduct] = useState([]) //storing the data of results
  //const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  //var updateData = [] //storing the data but in pairs
console.log("Product : ", product)
console.log('COUNT: ',count)

// if (data) {
//   setProduct(data.splice(0,2))
// }


/* Everytime the user clicks on a related products, state changes in the index.jsx and will pass down the new product_id */


 useEffect(() => {
  const getData = async () => {
    const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        Authorization: "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"
      }
    }) //end of axios get req
    const newData = await response.data
    //update the data but in pairs
   var splitData = newData.results.reduce((result, value, index, array) => {
      if (index % 2 === 0){
        result.push(array.slice(index, index + 2))
      }
      return result
    }, [])

    //updateData response.data.results
    setProduct(splitData)

  }
  //invoke the getData
  getData()
  //catch the errors
  .catch((err) => {
    console.log("ERROR: ", err)
  })

 }, [props.id]) // use a dependency array, so that we only run this useEffect when id changes


  //function when button is clicked will render 2 more reviews
   const renderMoreReviews = () => {
    //setCount(count + 1)
    var increaseCount = count + 1
    if (product.length === increaseCount) {
      // //re-render last review and remove button
      setDisplayButton(false)
      setCount(count + 1)

    } else {
      //increment count
      setCount(count + 1)
    }
  //   //check the length of product state
  //   //concat the product with the updateData next element
  //   //check if the length are the same
  //   // if not change the useState to re-render the reviews
  //   //updateData.splice( )
  //   var splitty = data.splice(0, 2 + count)
  //   if (data.length === splitty) {
  //     //remove the button and update setProduct and remove button
  //     //setDisplayButton to false
  //   } else {
  //     //if not the same length just update setProduct
  //     //also update setCount by incrementing by 2
    }



  // }

  // console.log('update data: ', updateData)
  // console.log('count: ', count)



  if (product) {
    return (
      <div>
        <h1>Rating and Reviews</h1>
        <Review renderMoreReviews={renderMoreReviews}  product={product} count={count} />
        {/* {product.map((each) => {
          return <Review></Review>
        })} */}

       {displayButton && <button onClick={renderMoreReviews}>More Reviews</button>}

      </div>
    )

  }
}

export default ReviewList;