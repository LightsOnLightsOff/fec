import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Review from './Review.jsx'
import Sorting from '../Sorting/Sorting.jsx'
import NewReview from "../New_Review/NewReview.jsx"
import Moment from 'moment'


function ReviewList(props) {

  const [displayButton, setDisplayButton] = useState(true) //display button only if there are more reviews
  //const [count, setCount] = useState(0) //this will display two reviews at a time
  const [product, setProduct] = useState([]) //storing the data of results
  const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  //var updateData = [] //storing the data but in pairs
  // console.log("Product : ", product)
   console.log('DATA: ', data)
   console.log("PRODUCT: ", product)



  /* Everytime the user clicks on a related products, state changes in the index.jsx and will pass down the new product_id */


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40355', {
        headers: {
          Authorization: "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"
        }
      }) //end of axios get req
      const newData = await response.data
      //update the data but in pairs
      var splitData = newData.results.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])

      //updateData response.data.results
      if (splitData.length < 2) {
        setDisplayButton(true)
      }
      setData(newData.results)
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

  }

  //sort the data based off what was clicked on
  const sortData = (value) => {
    var sortData;
    var reduceData;
    console.log("WHAT IS VALUE IN SORT DATA: ", value, value.length)

    //sort the data, reduce the data, change the product
    if(value === ' Newest') {

      sortData = [...data].sort((a,b) => new Date(Moment(b.date).format("YYYY-MM-DD")) - new Date(Moment(a.date).format("YYYY-MM-DD")))
      console.log("Sort data newest: ", sortData)

      reduceData = sortData.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])
      console.log("Reduce data newest: ", reduceData)

      setData(sortData)
      setProduct(reduceData)

    } else if (value === ' Helpful') {

      sortData = [...data].sort((a,b) => b.helpfulness - a.helpfulness)
      console.log("Sort data: ", sortData)

      reduceData = sortData.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])
      console.log("Reduce data: ", reduceData)

      setData(sortData)
      setProduct(reduceData)

    }



  }

  //increment the helpfull yes button (working! )
  const addHelpfull = (reviewId) => {
    console.log("this works and need id: ", reviewId)
    const headers = {
      Authorization: "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"
    }
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful`, null, {headers}  )
    .then((data) => {
      console.log("Did we get any data: ", data.data)
    })
    .catch((err) => {
      console.log("error from add helpful: ", err)
    })

  }

  //put request


  if (product) {
    return (
      <div className="review">

        <Sorting sortData={sortData} data={data} /> {/* Pass down the data to here to filter */}


        <div className="reviewList">

          <Review addHelpfull={addHelpfull} renderMoreReviews={renderMoreReviews} product={product} count={count} />

          {displayButton && <button onClick={renderMoreReviews}>More Reviews</button>}
          <NewReview />
        </div>

      </div>
    )

  }
}

export default ReviewList;