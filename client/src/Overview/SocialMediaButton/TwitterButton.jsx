import React, {useState} from 'react';

function TwitterButton ({onOpen}) {
  let twitterURL = 'https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png';

  return (
    <span id = 'twitter-button'>
      <img className = 'social-media-button' onClick = {onOpen}  src={twitterURL} style = {{cursor: 'pointer'}}/>
    </span>
  )
}

export default TwitterButton;