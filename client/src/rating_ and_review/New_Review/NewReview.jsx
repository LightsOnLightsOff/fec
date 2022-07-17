import React, { useState } from 'react';
import FormModal from './FormModal.jsx'

function NewReview({productId}) {
  const [toggleImage, setToggleImage] = useState(false)
  const [newUrl, setNewUrl] = useState('')

  //create function that will activate the form to open
  const formToggle = () => {
    // console.log("IVE BEEN CLICKED")
    setToggleImage(!toggleImage)
  }


  return (
    <div>
      <button onClick={formToggle}>Add </button>
      <FormModal
      toggle={formToggle}
      showModal={toggleImage}
      productId={productId}
      />


    </div>


  )


};

export default NewReview;