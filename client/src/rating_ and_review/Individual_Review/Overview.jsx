import React, { useState } from 'react';
import Images from './Images.jsx'
import Moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowAltCircleLeft, faUserAstronaut, faFaceLaughWink, faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';


function Overview({ result, addHelpfull, addReport }) {
  //body description
  const [showDescription, setShowDescription] = useState(false)
  //report data
  const [reportClicked, setReportClicked] = useState(false)
  //provide correct format date
  const formatDate = Moment(result.date).format("MMMM Do, YYYY")
  const anotherDate =  Moment(result.date).format("YYYY-MM-DD")
  // console.log("format data: ", anotherDate)
  console.log('results from Overview: ', result)

  var greatBody = false
  if (result.body.length > 60) {
    greatBody = true
  }

  var greatSummary = false
  if (result.summary.length > 250) {
    greatSummary= true
  }

  const report = () => {
    if (reportClicked) {
      return;
    } else {
    setReportClicked(true)
    addReport(result.review_id)


    }


  }



  return (
    <EachReview>

      {/* star, username and data */}
      <StarsAndDate >
        <StarRating>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <EachStarRating
                key={index}
                index={index}
                rating={result.rating}
                // className="eachStarRating"
                // className={index - 1 < result.rating ? "colorRating" : "nothing" }
              >
                <span>&#9733;</span>
              </EachStarRating>
          )

        })}

        </StarRating>
        <p><FontAwesomeIcon icon={faUserAstronaut}/> {result.reviewer_name}, {formatDate} </p>
      </StarsAndDate>


      {/* result body*/}
      {!greatBody && <h3>{result.body}</h3>}
      {greatBody && <div className="separateSummary"> <h3>{result.body.slice(0, 60)}...</h3>  <p className="restOfBody">...{result.body.slice(60)}</p> </div>}


      {/* result summary */}
      <Summary>
        {!greatSummary && !showDescription && <div> <p>{result.summary}</p> </div>}
        {greatSummary && !showDescription && <div> <p>{result.summary.slice(0,250)}...<span onClick={() => {setShowDescription(true)}}>show more</span></p> </div> }
        {greatSummary && showDescription && <div> <p>{result.summary}</p> </div>}

      </Summary>



      {result.recommend && <p> <span><FontAwesomeIcon icon={faFaceLaughWink} /> </span>  I recommend this product</p> }

      {result.response && <div> <p>Response:</p> <p>result.response</p> </div>}

      {result.photos.length > 0 && <Images photos={result.photos} />}


      <div >
        {/*Idk if i should add a "No" */}
        <p>Helpful? <Yes onClick={() => {addHelpfull(result.review_id)}}>Yes</Yes> ({result.helpfulness})
           | {!reportClicked && <Yes onClick={report} >Report</Yes>} {reportClicked && <Yes>Reported</Yes>} </p>
      </div>


    </EachReview>
  )
}

export default Overview;


const EachReview = styled.div`
  padding: 10px;
  border-bottom: solid black;
  padding-left: 15px;
`;

const Summary = styled.div`
  padding-top: 8px;
`;

const StarRating = styled.span`
  color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: row;
`;

const EachStarRating = styled.p`
color: ${props => props.index - 1 < props.rating ? "black" : "nothing" }
`;

const StarsAndDate = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Yes = styled.span`
text-decoration: underline;

&:hover {
  cursor: pointer;
}
`;

