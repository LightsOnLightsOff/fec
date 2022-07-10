import React, { useState } from 'react';

function Overview({ result }) {
  //render out indivdual reviews
  var greatBody = false
  console.log('results from Overview: ', result)
  if (result.body.length > 60) {
    greatBody = true

  }



  return (
    <div className="eachReview">

      <div className="starsAndDate">
        <div className="starRating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <p
                key={index}
                className="eachStarRating"
                className={index < result.rating ? "colorRating" : "nothing" }
              >
                <span>&#9733;</span>
              </p>
          )

        })}

        </div>



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