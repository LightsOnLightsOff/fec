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




  return (
    <div className="images">
      {photos.map((each, index) => {
        return <div key={index}> <img className="eachImage" src={each.url} onClick={() => { toggle(each.url) }} />
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