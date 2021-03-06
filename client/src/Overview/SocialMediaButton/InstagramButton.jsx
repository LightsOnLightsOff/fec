import React, {useState} from 'react';

function InstagramButton ({onOpen}) {
  let instagramURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png';

  return (
    <span id = 'instagram-button'>
      <img className = 'social-media-button' onClick = {onOpen} src={instagramURL} style = {{cursor: 'pointer'}}/>
    </span>
  )
}

export default InstagramButton;