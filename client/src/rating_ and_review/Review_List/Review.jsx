import React, { useState } from 'react';
import EachReview from './EachReview.jsx'

function Review({ product, count, renderMoreReviews, addHelpfull, addReport }) {


  return (
    <div>
      {product.slice(0, count).map((each, index) => {
        return <EachReview addReport={addReport} addHelpfull={addHelpfull} key={index} each={each} renderMoreReviews={renderMoreReviews} />
      })}

    </div>

    // <div>I am a review!</div>
    // <p></p>
  )
}

export default Review;