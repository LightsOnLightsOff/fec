import React, { useState } from 'react';

function Images({photos}) {


  return (
    <div className="images">
      {photos.map((each, index) => {
        return <img className="eachImage" key={index} src={each.url} />
      })}

    </div>
  )
}

export default Images;