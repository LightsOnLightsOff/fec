import React, {useState} from 'react';

function InstagramButton ({onOpen}) {
  let instagramURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png';

  return (
    <div>
      <button onClick = {onOpen}>
        <img height="10px" width="10px" src={instagramURL} />
      </button>
    </div>
  )
}

export default InstagramButton;