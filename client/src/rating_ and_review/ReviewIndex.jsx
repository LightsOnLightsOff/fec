import React, { useState, useEffect } from 'react';
import ReviewList from './Review_List/ReviewList.jsx'
import Ratings from './Rating_Breakdown/Ratings.jsx'
import styled from 'styled-components';

function ReviewIndex(props) {


  return (
    <div>
      <RatingAndReview>Rating & Reviews <Bear>ʕ•ᴥ•ʔ</Bear></RatingAndReview>
      <div className="rating">
        <Ratings />

        <ReviewList /> {/*this componenet will have product id passed down */}

      </div>



    </div>
  )
}

export default ReviewIndex;

const Bear = styled.span`
  color: #f80
`;

const RatingAndReview = styled.h1`
  padding: 10px;
`;

