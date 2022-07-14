import React, {useState} from 'react';

function FacebookButton ({onOpen}) {
  let facebookURL = 'https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png';

  return (
    <span>
      <button onClick = {onOpen}>
        <img height="10px" width="10px" src={facebookURL} />
      </button>
    </span>
  )
}

export default FacebookButton;