import React, { useState } from 'react';
import EachReview from './EachReview.jsx'

function Review({ product, count, renderMoreReviews }) {


  return (
    <div>
      {product.slice(0, count).map((each) => {
        return <EachReview key={count} each={each} renderMoreReviews={renderMoreReviews} />
      })}

    </div>

    // <div>I am a review!</div>
    // <p></p>
  )
}

export default Review;