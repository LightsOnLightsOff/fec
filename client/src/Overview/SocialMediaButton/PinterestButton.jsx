import React, {useState} from 'react';

function PinterestButton ({onOpen}) {
  let pinterestURL = 'https://www.rockymountainfoodtours.com/wp-content/uploads/2016/02/Pinterest-Logo.png';

  return (
    <div>
      <button onClick = {onOpen}>
        <img height="10px" width="10px" src={pinterestURL} />
      </button>
    </div>
  )
}

export default PinterestButton;