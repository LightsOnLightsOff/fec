import React, { useState } from 'react';

function EachReview ({each, renderMoreReviews}) {
  //map it again with the 2 review items

  return (
    <div>
      {each.map((result) => {
        return <p key={result.review_id}>{result.reviewer_name} and {result.summary}</p>
      })}


    </div>
  )

}

export default EachReview;