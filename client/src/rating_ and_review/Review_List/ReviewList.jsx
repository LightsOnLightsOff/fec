import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import Review from './Review.jsx'
import Sorting from '../Sorting/Sorting.jsx'
import NewReview from "../New_Review/NewReview.jsx"
import SearchBar from './SearchBar.jsx'
import FormModal from '../New_Review/FormModal.jsx'
import Moment from 'moment'
import config from '../../../../config.js'
import { UserContext } from "../../index.jsx"
import styled from 'styled-components';


function ReviewList({ setDisplayButton, setProduct, setData, setRelevantData, setProductId, setCount, setCurrentReviewId, splitFilter, filterData, relevantData, productId, renderMoreReviews, count, displayButton, currentReviewId, displayLessButton, removeReviews }) {

  const context = useContext(UserContext)

  const [toggleImage, setToggleImage] = useState(false)
  const [newUrl, setNewUrl] = useState('')
  const [getDataBySort, setGetDataBySort] = useState('relevant')

  //sort the data based off what was clicked on
  const sortData = (value) => {
    var sortData;
    var reduceData;
    // console.log("WHAT IS VALUE IN SORT DATA: ", value, value.length)

    //sort the data, reduce the data, change the product
    if (value === ' Newest') {

      sortData = [...filterData].sort((a, b) => new Date(Moment(b.date).format("YYYY-MM-DD")) - new Date(Moment(a.date).format("YYYY-MM-DD")))
      console.log("Sort data newest: ", sortData)

      reduceData = sortData.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])
      // console.log("Reduce data newest: ", reduceData)

      setData(sortData)
      setProduct(reduceData)
      setGetDataBySort('newest')

    } else if (value === ' Helpful') {

      sortData = [...filterData].sort((a, b) => b.helpfulness - a.helpfulness)
      // console.log("Sort data: ", sortData)

      reduceData = sortData.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])
      // console.log("Reduce data: ", reduceData)

      setData(sortData)
      setProduct(reduceData)
      setGetDataBySort('helpful')

    } else if (value === " Relevant") {
      var splitDataAgain = relevantData.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2))
        }
        return result
      }, [])

      setData(relevantData)
      setProduct(splitDataAgain)
      setGetDataBySort('relevant')

    }


  }

  const getDataAgain = (reviewId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${context.productInfo.id}&count=200&sort=${getDataBySort}`, {
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((newData) => {
        var splitData = newData.data.results.reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2))
          }
          return result
        }, [])
        // console.log("GET DATA HERE FROM HELPFUL: ", splitData.length)

        //updateData response.data.results
        if (splitData.length < 2) {
          // console.log("SPLIT DATA WENT THOUGH")
          setDisplayButton(true)
        }
        setData(newData.data.results)
        setProduct(splitData)
        setProductId(newData.data.product)
        if (reviewId) {
          setCurrentReviewId(reviewId)
        }


      })
      .catch((error) => {
        console.log("error when getting info after helpfullness: ", error)
      })

  }

  //increment the helpfull yes button (working! )
  //setCurrentReviewId
  const addHelpfull = (reviewId) => {
    if (currentReviewId === reviewId) {
      return;
    } else {
      const headers = {
        Authorization: config.TOKEN
      }
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful`, null, { headers })
        .then((data) => {
          console.log("Did we get any data: ", data.data)
          getDataAgain(reviewId)

        })
        .catch((err) => {
          console.log("error from add helpful: ", err)
        })

    }

  }

  //add reported


  const addReport = (reviewId) => {
    const headers = {
      Authorization: config.TOKEN
    }
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/report`, null, { headers })
      .then((data) => {
        console.log("Did we get any data: ", data.data)

      })
      .catch((err) => {
        console.log("error from add reporting data: ", err)
      })



  }

  //post request
  const postData = (data) => {
    axios.post("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews", data, {
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((res) => {
        // console.log("ANYTHING?: ", res.data)
        getDataAgain()
      })
      .catch((err) => {
        console.log("ERROR WHEN DOING POST REQ: ", err)
      })

  }

  //toggle form Modal
  const formToggle = () => {
    // console.log("IVE BEEN CLICKED")
    setToggleImage(!toggleImage)
  }



  //if (product) {
  return (
    <div className="review">

      <Sorting sortData={sortData} data={filterData} /> {/* Pass down the data to here to filter */}

      <div className="reviewList">

        <Review addReport={addReport} productId={productId} addHelpfull={addHelpfull} renderMoreReviews={renderMoreReviews} product={splitFilter} count={count} />

        {displayButton && <Button onClick={renderMoreReviews}>More Reviews +</Button>}
        {displayLessButton && <Button onClick={removeReviews}>Less Reviews -</Button>}
        <Button onClick={formToggle}>Add New Review </Button>
        <FormModal
          toggle={formToggle}
          showModal={toggleImage}
          productId={productId}
          postData={postData}
        />
      </div>

    </div>
  )

  //}
}

export default ReviewList;

const Button = styled.button`
padding: 8px;
margin: 5px;
border-radius: 7px;
background-color: white;
&:hover {
  cursor: pointer
}

`;