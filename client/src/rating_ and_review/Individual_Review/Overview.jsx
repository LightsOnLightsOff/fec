import React, { useState } from 'react';
import Moment from 'moment'

function Overview({ result }) {
  //render out indivdual reviews
  const formatDate = Moment(result.date).format("MMMM Do, YYYY")
  console.log("format data: ", formatDate)
  var greatBody = false
  console.log('results from Overview: ', result)
  if (result.body.length > 60) {
    greatBody = true

  }



  return (
    <div className="eachReview">

      <div className="starsAndDate">
        <span className="starRating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <p
                key={index}
                className="eachStarRating"
                className={index - 1 < result.rating ? "colorRating" : "nothing" }
              >
                <span>&#9733;</span>
              </p>
          )

        })}

        </span>
        <p>{result.reviewer_name}, {formatDate} </p>





      </div>


      {!greatBody && <h3>{result.body}</h3>}
      {greatBody && <div className="separateSummary"> <h3>{result.body.slice(0, 60)}...</h3>  <p className="restOfBody">...{result.body.slice(60)}</p> </div>}

      <div className="summary">
        <p>{result.summary}</p>
      </div>

      <div className="helpful">
        <p>Was this review helpful? <span className="yes">Yes</span> ({result.helpfulness})
          | <span>Report</span> </p>
      </div>


    </div>
  )
}

export default Overview;