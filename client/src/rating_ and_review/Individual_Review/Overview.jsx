import React, { useState } from 'react';
import Images from './Images.jsx'
import Moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowAltCircleLeft, faUserAstronaut, faFaceLaughWink } from '@fortawesome/free-solid-svg-icons'


function Overview({ result, addHelpfull }) {
  //body description
  const [showDescription, setShowDescription] = useState(false)
  //helpfullness data
  //provide correct format date
  const formatDate = Moment(result.date).format("MMMM Do, YYYY")
  //console.log("format data: ", formatDate)
  console.log('results from Overview: ', result)

  var greatBody = false
  if (result.body.length > 60) {
    greatBody = true
  }

  var greatSummary = false
  if (result.summary.length > 250) {
    greatSummary= true
  }



  return (
    <div className="eachReview">
      {/* star, username and data */}
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
        <p><FontAwesomeIcon icon={faUserAstronaut}/> {result.reviewer_name}, {formatDate} </p>
      </div>


      {/* result body*/}
      {!greatBody && <h3>{result.body}</h3>}
      {greatBody && <div className="separateSummary"> <h3>{result.body.slice(0, 60)}...</h3>  <p className="restOfBody">...{result.body.slice(60)}</p> </div>}


      {/* result summary */}
      <div className="summary">
        {!greatSummary && !showDescription && <div> <p>{result.summary}</p> </div>}
        {greatSummary && !showDescription && <div> <p>{result.summary.slice(0,250)}...<span onClick={() => {setShowDescription(true)}}>show more</span></p> </div> }
        {greatSummary && showDescription && <div> <p>{result.summary}</p> </div>}

      </div>



      {result.recommend && <p> <span><FontAwesomeIcon icon={faFaceLaughWink} /> </span>  I recommend this product</p> }

      {result.response && <div> <p>Response:</p> <p>result.response</p> </div>}

      {result.photos.length > 0 && <Images photos={result.photos} />}


      <div className="helpful">
        {/*Idk if i should add a "No" */}
        <p>Helpful? <span onClick={() => {addHelpfull(result.review_id)}} className="yes">Yes</span> ({result.helpfulness})
           | <span className="report">Report</span> </p>
      </div>


    </div>
  )
}

export default Overview;