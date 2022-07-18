import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowAltCircleLeft, faUserAstronaut, faFaceLaughWink, faImages } from '@fortawesome/free-solid-svg-icons'



function UploadImage({setShowImage, showImage}) {

  //const [showImage, setShowImage] = useState([])
  // console.log("SHOW IMAGE: ", showImage)

  let urlImages = []
  let count = 0
  const photoArray = (url) => {
    console.log("COUNT: ", count++)
    urlImages.push(url)
    // console.log("URL: ", urlImages)
    setShowImage(urlImages)

  }

  const checkUploadResult = (resultEvent) => {
    if (resultEvent.event === "success") {
      console.log('Done! Here is the image info: ', resultEvent.info);
      photoArray(resultEvent.info.secure_url)
      // console.log("UPDATED IMAGE: ", photoArray)
      // setShowImage(photoArray)
    }
  }

  var widget = window.cloudinary.createUploadWidget({
    cloudName: 'dpbkoptqh',
    uploadPreset: 'clapper_image'
  }, (error, result) => {
    checkUploadResult(result)
  })



  const showWidget = () => {
    // console.log("WIDGET IS HERE")
    widget.open()
  }



  return (
    <div>
      <h4>Add a photo</h4>
      <Div>
        <ImageBox onClick={showWidget}>◕‿‿◕</ImageBox>
        {/* <Img src="https://res.cloudinary.com/dpbkoptqh/image/upload/v1658013211/ojuymnw187z1m0vcjvzx.jpg"></Img>
        <Img src="https://res.cloudinary.com/dpbkoptqh/image/upload/v1658013212/xcghswbujsdudywxvvw6.jpg"></Img> */}
        {showImage.map((url, index) => {
          index += 1;
          return <Img key={index} src={url} alt="Sorry image cannot upload :("></Img>


        })}



      </Div>
    </div>
  )
}

export default UploadImage;

const ImageBox = styled.div`
font-size: 15px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
align-item center;
padding: 30px;
height: 3px;
width: 3px;
background-color: #fafafa;
border: dashed #a9b7b8;
border-width: 2px;
border-radius: 5px;
&:hover {
  cursor: pointer
}

`;

const Img = styled.img`
height: 68px;
  width: 68px;
  padding-left: 5px;
  padding-right: 5px;
`;

const Div = styled.div`
display: flex;
flex-direction: row:

`;