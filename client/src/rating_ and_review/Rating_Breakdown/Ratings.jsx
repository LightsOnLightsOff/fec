import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import Product from './Product.jsx'
import config from '../../../../config.js'

function Ratings({filterByStar}) {

  const [ratings, setRatings] = useState([])
  // console.log("WE GOT RATINGS: ", ratings)
  /*
  Data broken down:
  product_id:

  rating: {
    1: ,
    2: ,
    3: ,
    4: ,
    5:
  }

  recommended: {
    false: ,
    true: ,
  }

  characteristics: {
    Comfort: {
      id: ,
      value:
    },
    Quality: {
      id: ,
      value:
    },
    Size: {
      id: ,
      value:
    }.
    Width: {
      id: ,
      value:
    }
  }

  */


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40344', {
        headers: {
          Authorization: config.TOKEN
        }
      }) //end of axios get req
      const newData = await response.data

      //useState to update
      // console.log("We got data from ratings: ", newData)
      setRatings(newData)

    }
    //invoke the getData
    getData()
      //catch the errors
      .catch((err) => {
        console.log("ERROR: ", err)
      })

  }, []) //props.id <---- will need this when we pass down the prop ID

if (Object.keys(ratings).length > 0) {
  return (
    <div className="starProduct">
      <Stars filterByStar={filterByStar} rate={ratings.ratings} recommended={ratings.recommended} />
      <Product  ratings={ratings} />

    </div>
  )

}

}


export default Ratings;