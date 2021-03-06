import React, {useState} from 'react';

function FacebookButton ({onOpen}) {
  let facebookURL = 'https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png';

  return (
    <span id = 'facebook-button'>
      <img className = 'social-media-button' onClick = {onOpen} src={facebookURL} style = {{cursor: 'pointer'}}/>
    </span>
  )
}

export default FacebookButton;