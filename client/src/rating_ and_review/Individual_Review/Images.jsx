import React, { useState } from 'react';
import Modal from './ImageModal.jsx'

function Images({ photos }) {
  const [toggleModal, setToggleModal] = useState(false)
  const [newUrl, setNewUrl] = useState('')

  const toggle = (url) => {
    //console.log("URL HERE: ", url)
    setNewUrl(url)
    setToggleModal(!toggleModal)

  }

  //props.primary ? "white" : "palevioletred" to check if image if valid



  return (
    <div className="images">
      {photos.map((each, index) => {
        return <div key={index}> <img className="eachImage" src={each.url} alt="Sorry, Image Cannot Load &#9785;" onClick={() => { toggle(each.url) }} />
        </div>
      })}

      <Modal
        isShowing={toggleModal}
        hide={toggle}
        image={newUrl}
      />


    </div>
  )
}

export default Images;