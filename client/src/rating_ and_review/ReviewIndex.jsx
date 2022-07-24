import React, { useState, useEffect, useContext } from 'react';
import ReviewList from './Review_List/ReviewList.jsx'
// import { UserContext } from "../index.jsx"
import Ratings from './Rating_Breakdown/Ratings.jsx'
import SearchBar from './Review_List/SearchBar.jsx'
import styled from 'styled-components';

function ReviewIndex(props) {
  // const context = useContext(UserContext)

  return (
    <Div>

      <RatingAndReview  id='brandonNeedsThisDiv'> Rating & Reviews<Bear></Bear></RatingAndReview>
      <div className="rating">
    {/* <Ratings />  this component will have product is passed down here as well */}
        <SearchBar />
        {/*<ReviewList /> this componenet will have product id passed down */}

      </div>



    </Div>
  )
}

export default ReviewIndex;

const Bear = styled.span`
  color: #f80
`;

const RatingAndReview = styled.h1`
  padding: 10px;
  padding-left: 35px;
`;

const Div = styled.div`
padding-bottom: 10px;
margin-bottom: 20px;
`
