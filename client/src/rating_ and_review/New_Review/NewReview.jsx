import React, { useState } from 'react';
import FormModal from './FormModal.jsx'
import styled from 'styled-components';

function NewReview({productId, postData}) {
  const [toggleImage, setToggleImage] = useState(false)
  const [newUrl, setNewUrl] = useState('')

  //create function that will activate the form to open
  const formToggle = () => {
    // console.log("IVE BEEN CLICKED")
    setToggleImage(!toggleImage)
  }


  return (
    <div>
      <Button onClick={formToggle}>Add New Review </Button>
      <FormModal
      toggle={formToggle}
      showModal={toggleImage}
      productId={productId}
      postData={postData}
      />


    </div>


  )


};

export default NewReview;

const Button = styled.button`
padding: 8px;
margin: 5px;
border-radius: 7px;
background-color: white;
&:hover {
  cursor: pointer
}

`;