import React, { useState, useEffect } from 'react';
import ReviewList from './Review_List/ReviewList.jsx'
import Ratings from './Rating_Breakdown/Ratings.jsx'
import SearchBar from './Review_List/SearchBar.jsx'
import styled from 'styled-components';

function ReviewIndex(props) {


  return (
    <div>

      <RatingAndReview>Rating & Reviews &#128161; &#x1F4A1; <Bear>ʕ•ᴥ•ʔ</Bear></RatingAndReview>
      <div className="rating">
         <Ratings />  {/*this component will have product is passed down here as well */}
        <SearchBar />
        {/*<ReviewList /> this componenet will have product id passed down */}

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

