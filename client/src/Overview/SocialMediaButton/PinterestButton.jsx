import React, {useState} from 'react';

function PinterestButton ({onOpen}) {
  let pinterestURL = 'https://www.rockymountainfoodtours.com/wp-content/uploads/2016/02/Pinterest-Logo.png';

  return (
    <span id = 'pinterest-button'>
      <img className = 'social-media-button' onClick = {onOpen}  src={pinterestURL} style = {{cursor: 'pointer'}}/>
    </span>
  )
}

export default PinterestButton;