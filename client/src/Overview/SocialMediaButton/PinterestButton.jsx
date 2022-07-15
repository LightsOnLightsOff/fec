import React, {useState} from 'react';

function PinterestButton ({onOpen}) {
  let pinterestURL = 'https://www.rockymountainfoodtours.com/wp-content/uploads/2016/02/Pinterest-Logo.png';

  return (
    <span>
      <img className = 'social-media-button' onClick = {onOpen}  src={pinterestURL} />
    </span>
  )
}

export default PinterestButton;