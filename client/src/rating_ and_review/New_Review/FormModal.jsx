import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Characteristics from './Characteristics.jsx'
import UploadImage from './UploadImage.jsx'
import axios from 'axios'
import config from '../../../../config.js'

function FormModal({ toggle, showModal, productId, postData }) {
  /*
  This error will occur if:

- Any mandatory fields are blank
- The review body is less than 50 characters
- The email address provided is not in correct email format
- The images selected are invalid or unable to be uploaded.


  */




  const [starIndex, setStarIndex] = useState(0)
  const [recommends, setRecommend] = useState(true)
  // console.log("DO YOU RECOMMEND: ", recommend)
  //characteristics
  const [size, setSize] = useState(0)
  const [width, setWidth] = useState(0)
  const [comfort, setComfort] = useState(0)
  const [quality, setQuality] = useState(0)
  const [length, setLength] = useState(0)
  const [fit, setFit] = useState(0)
  //summary 60 char cap
  const [summarys, setSummary] = useState("")
  const [summaryLength, setSummaryLength] = useState(0)
  //body 1000 char cap
  const [bodys, setBody] = useState("")
  const [bodyMin, setBodyMin] = useState(50)
  const [bodyLength, setBodyLength] = useState(0)
  //cap 60 char
  const [username, setUsername] = useState("")
  //email cap 60 char
  const [emails, setEmail] = useState("")

  const [showImage, setShowImage] = useState([]) //array of url images
  // console.log("THIS IS WHERE THE ARRAY OF PHOTOS WILL GO: ", showImage)

  const characteristicsData = [
    { 'character': 'size', '1': 'A size too small', '2': "½ a size too small", '3': "Perfect", '4': "½ a size too big", '5': "A size too wide", 'state': setSize },
    { 'character': 'width', '1': 'Too narrow', '2': "Slightly narrow", '3': "Perfect", '4': "Slightly wide", '5': "Too wide", 'state': setWidth },
    { 'character': 'comfort', '1': 'Unfomfortable', '2': "Slightly uncomfortable", '3': "Ok", '4': "Comfortable", '5': "Perfect", 'state': setComfort },
    { 'character': 'quality', '1': 'Poor', '2': "Below average", '3': "What I expected", '4': "Pretty great", '5': "Perfect", 'state': setQuality },
    { 'character': 'length', '1': 'Runs short', '2': "Runs slightly short", '3': "Perfect", '4': "Runs slightly long", '5': "Runs long", 'state': setLength },
    { 'character': 'fit', '1': 'Runs tight', '2': "Runs slightly tight", '3': "Perfect", '4': "Runs slightly long", '5': "Runs long", 'state': setFit },
  ]

  // console.log("CHARACTER DATA: ", characteristicsData)
  // console.log("SIZE DATA", size )
  // '14': size,
  // '15': width,
  // '16': comfort,
  // '17': quality,
  // '18': length,
  // '19': fit

  const postReq = () => {
    var data = {
      product_id: 40344,
      rating: starIndex,
      summary: summarys,
      body: bodys,
      recommend: recommends,
      name: username,
      email : emails,
      photos : showImage,
      characteristics : {}

    }
    console.log("DATA WE PUT TOGETHER: ", data)
    // postData(data)


  }

  const rateStar = (index) => {
    // console.log("Star has been clicked!!!", index)
    setStarIndex(index)
  }

  const summarysLength = (e) => {
    if (event.target.value.length > 60) {
      return;
    } else {
      setSummary(event.target.value)
      setSummaryLength(event.target.value.length)
    }
  }

  const bodysLength = (e) => {
    if (event.target.value.length > 1000) {
      return;
    } else
      var answer = bodyLength - bodyMin
    setBodyMin(answer)
    setBody(event.target.value)
    setBodyLength(event.target.value.length)

  }

  const storeUsername = (e) => {
    if (event.target.value > 50) {
      return;
    } else {
      setUsername(event.target.value)
    }
  }

  const storeEmail = (e) => {
    if (event.target.value > 50) {
      return;
    } else {
      setEmail(event.target.value)
    }
  }



  // console.log('showModal', showModal)
  if (showModal) {
    // console.log("star modal trying to get in here!!!")
    return (
      <FormOverlay>
        <button onClick={toggle} className="modal-button">
          <span>&times;</span>
        </button>
        <FormWrapper>
          <Forms>
            <h2>About the <code>**Product Name**</code></h2>
            <OverallAndStar>
              <TextBox>
                <p>But first, what do I call you?</p>
                <Name type="text" placeholder="jackson11!" value={username} onChange={storeUsername}></Name>
                <code> ( ͡° ͜ʖ ͡°) </code>
              </TextBox>
              <TextBox>
                <p>Please provide your email</p>
                <Name type="text" placeholder="jackson11@email.com" value={emails} onChange={storeEmail}></Name>
                <code>*For authentication reasons, you will not be emailed</code>
              </TextBox>
            </OverallAndStar>

            <OverallAndStar>
              <Overall>Overall Rating</Overall>
              <StarsAndDate>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <EachStarRating key={index} onClick={() => { rateStar(index) }} currentKey={index} index={starIndex} >
                      <span>&#9733;</span>
                    </EachStarRating>
                  )

                })}
              </StarsAndDate>
            </OverallAndStar>
            <Recommend>
              <h3>Do you recommend this product?</h3>
              <Yes>
                <input onClick={() => {setRecommend(true)}} name="recommend" type="radio" value="Yes" />
                Yes
                <input onClick={() => {setRecommend(false)}} name="recommend" type="radio" value="No" />
                No
              </Yes>
            </Recommend>
            <Recommend>
              {characteristicsData.map((data, index) => {
                return <Characteristics key={index} data={data} />
              })}
            </Recommend>

          </Forms>

          <TextBox>
            <Recommend>
              <TextSummary placeholder="  Please provide summary: ie. Best purchase ever!" name="summary" rows="5" cols="60" value={summarys} onChange={summarysLength}></TextSummary>
              <code>Characters: {summaryLength} / 60</code>
            </Recommend>

            <Recommend>
              <UploadImage setShowImage={setShowImage} showImage={showImage} />

            </Recommend>

            <Recommend>
              <TextSummary placeholder="  Why did you like the product or not?" name="body" rows="10" cols="60" value={bodys} onChange={bodysLength} ></TextSummary>
              <code>Characters: {bodyLength} {bodyLength >= 50 && <code style={{ position: 'static' }}>Minimun reached &#128077;  </code>}</code>
            </Recommend>
          </TextBox>
          <button onClick={postReq}>Submit Review</button>
        </FormWrapper>
      </FormOverlay>


    )

  } else {
    null
  }
}

export default FormModal;

const OverallAndStar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding-top: 15px;


`;

const Forms = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 80%;
padding-right: 30px;


`;

const Overall = styled.h3`
padding: 20px;

`;
//DONT TOUCH THIS ONE
const FormOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1040;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;


`;

const FormWrapper = styled.div`
margin: 15px;
background-color: #dcd0ff;
box-shadow: 10px 10px 10px lightblue;
border-radius: 15px;
width: 70%;
max-height: 100%;
overflow-y: auto;



`;

const Form = styled.div`
display: flex;
justify-content: center;

`;

const StarsAndDate = styled.span`
color: rgba(0, 0, 0, 0.2);
display: flex;
justify-content: row;
width: fit-content;
margin: 0px;
padding: 0px;


`;

const EachStarRating = styled.p`
color: ${props => props.currentKey - 1 <= props.index - 1 ? "#fec201" : "nothing"};
font-size: 30px;
&:hover {
  cursor: pointer;
}

`;

const Recommend = styled(Overall)`
  margin: 20px;
  margin-bottom: 5px;
`;

const Yes = styled.label`

`;

const TextSummary = styled.textarea`
border-radius: 5px 30px 30px;

`;

const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;


`;

const Name = styled.input`
border-radius: 5px;
height: 20px;

`;

