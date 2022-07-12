import React, {useState} from 'react';

function TwitterButton ({onOpen}) {
  let twitterURL = 'https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png';

  return (
    <div>
      <button onClick = {onOpen}>
        <img height="10px" width="10px" src={twitterURL} />
      </button>
    </div>
  )
}

export default TwitterButton;