import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../index.jsx"
import ReviewList from './ReviewList.jsx'
import Ratings from '../Rating_Breakdown/Ratings.jsx'
import styled from 'styled-components';
import axios from 'axios'
import config from '../../../../config.js'


function SearchBar(props) {
  const context = useContext(UserContext)
  // console.log("WHAT DOES THE DATA LOOK LIKE: ", context)

  const [searchReview, setSearchReview] = useState('')


  const [displayButton, setDisplayButton] = useState(true) //display button only if there are more reviews
  //const [count, setCount] = useState(0) //this will display two reviews at a time
  const [product, setProduct] = useState([]) //storing the data of results
  const [data, setData] = useState([])
  const [relevantData, setRelevantData] = useState([])
  const [productId, setProductId] = useState('') //TEMP KEEP THIS UNTIL WE USE USECONTEXT
  const [count, setCount] = useState(1)
  const [displayLessButton, setDisplayLessButton] = useState(false)
  //var updateData = [] //storing the data but in pairs
  const [currentReviewId, setCurrentReviewId] = useState('') //check if the helpful already clicked
  const [filterStarRating, setFilterStarRating] = useState(false) //check if we need to filter out the star
  const [numStar, setNumStar] = useState(0)

  // console.log("THIS IS THE SET DATA IN SEARCH BAR: ", data)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${context.productInfo.id}&count=5000&sort=relevant`, {
        headers: {
          Authorization: config.TOKEN
        }
      }) //end of axios get req
      const newData = await response.data
      //update the data but in pairs
      // console.log("THIS IS NEW DATA.DATA: ", newData)
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
      setRelevantData(newData.results)
      setData(newData.results)
      setProduct(splitData)
      setProductId(newData.product)

    }
    //invoke the getData
    getData()
      //catch the errors
      .catch((err) => {
        console.log("ERROR: ", err)
      })

  }, [context.productInfo.id])

  const renderMoreReviews = () => {
    //setCount(count + 1)
    var increaseCount = count + 1
    if (product.length === increaseCount) {
      // //re-render last review and remove button
      setDisplayLessButton(false)
      setDisplayButton(false)
      setCount(count + 1)

    } else {
      //increment count
      setDisplayLessButton(true)
      setCount(count + 1)
    }

  }

  const removeReviews = () => {
    var increaseCount = count - 1
    if (increaseCount === 1) {
      setDisplayLessButton(false)
      setCount(count - 1)
    } else {
      setCount(count - 1)
    }
  }

  const filterByStar = (num) => {
    if (num === numStar && filterStarRating) {
      setFilterStarRating(false)
    } else {
      setFilterStarRating(true)
      setNumStar(num)

    }

  }








  if (product) {
    var filterData;
    var splitFilter
    filterData = data.filter((eachReview) => {
      return eachReview.summary.toLowerCase().includes(searchReview.toLowerCase()) || eachReview.body.toLowerCase().includes(searchReview.toLowerCase())
    })

    if (filterStarRating) {
      filterData = filterData.filter((eachReview) => {
        return eachReview.rating === numStar
      })
    }

    // console.log("SEARCHED DATA: ", filterData)
    splitFilter = filterData.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2))
      }
      return result
    }, [])

    // console.log("WHAT IS SPLIT FILTER: ", splitFilter)
    return (
      <div className="rating">
        <Ratings filterByStar={filterByStar} />
        <div>
          <Input data-testid="searchbar" onChange={(e) => { setSearchReview(e.target.value) }} type="text" placeholder="Search Reviews"></Input>
          <ReviewList
            setDisplayButton={setDisplayButton}
            setProduct={setProduct}
            setData={setData}
            setRelevantData={setRelevantData}
            setProductId={setProductId}
            setCount={setCount}
            setCurrentReviewId={setCurrentReviewId}
            splitFilter={splitFilter}
            filterData={filterData}
            relevantData={relevantData}
            productId={productId}
            renderMoreReviews={renderMoreReviews}
            count={count}
            displayButton={displayButton}
            currentReviewId={currentReviewId}
            displayLessButton={displayLessButton}
            removeReviews={removeReviews} />

        </div>
      </div>

    )
  }
}

export default SearchBar;


const Input = styled.input`
padding: 10px;
border-radius: 7px;
width: 80%;

`;
