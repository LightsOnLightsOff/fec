import React, { useState } from 'react';
import Overview from '../Individual_Review/Overview.jsx'

function EachReview ({each, renderMoreReviews}) {
  //map it again with the 2 review items

  return (
    <div >
      {each.map((result) => {
        return <Overview key={result.review_id} result={result} />
      })}


    </div>
  )

}

export default EachReview;