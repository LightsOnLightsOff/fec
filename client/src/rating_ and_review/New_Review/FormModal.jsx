import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Characteristics from './Characteristics.jsx'

function FormModal({ toggle, showModal }) {
  /*
  This error will occur if:

- Any mandatory fields are blank
- The review body is less than 50 characters
- The email address provided is not in correct email format
- The images selected are invalid or unable to be uploaded.


  */

  const characteristicsData =[
    {'character': 'size', '1': 'A size too small', '2': "½ a size too small", '3': "Perfect", '4': "½ a size too big", '5': "A size too wide", 'state': setSize},
    {'character': 'width', '1': 'Too narrow', '2': "Slightly narrow", '3': "Perfect", '4': "Slightly wide", '5': "Too wide", 'state': setWidth},
    {'character': 'comfort', '1': 'Unfomfortable', '2': "Slightly uncomfortable", '3': "Ok", '4': "Comfortable", '5': "Perfect", 'state': setComfort},
    {'character': 'quality', '1': 'Poor', '2': "Below average", '3': "What I expected", '4': "Pretty great", '5': "Perfect", 'state': setQuality},
    {'character': 'length', '1': 'Runs short', '2': "Runs slightly short", '3': "Perfect", '4': "Runs slightly long", '5': "Runs long", 'state': setLength},
    {'character': 'fit', '1': 'Runs tight', '2': "Runs slightly tight", '3': "Perfect", '4': "Runs slightly long", '5': "Runs long", 'state': setFit},
  ]

  const [starIndex, setStarIndex] = useState(0)
  const [recommend, setRecommend] = useState(true)
  //characteristics
  const [size, setSize] = useState(0)
  const [width, setWidth] = useState(0)
  const [comfort, setComfort] = useState(0)
  const [quality, setQuality] = useState(0)
  const [length, setLength] = useState(0)
  const [fit, setFit] = useState(0)
  //summary 60 char cap
  const [summary, setSummary] = useState("")
  //body 1000 char cap
  const [body, setBody] = useState("")
  //cap 60 char
  const [username, setUsername] = useState("")
  //email cap 60 char
  const [email, setEmail] = useState("")



  const rateStar = (index) => {
    // console.log("Star has been clicked!!!", index)
    setStarIndex(index)
  }

  // console.log('showModal', showModal)
  if (showModal) {
    // console.log("star modal trying to get in here!!!")
    return (
      <FormOverlay>
        <FormWrapper>
          <button onClick={toggle} className="modal-button">
            <span>&times;</span>
          </button>
          <form>
            <h2>About the <code>**Product Name**</code></h2>
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
                <input name="recommend" type="radio" value="Yes" />
                Yes
                <input name="recommend" type="radio" value="No" />
                No
              </Yes>
              {/* <Yes>
                  <input type="radio" value="No">No</input>
                </Yes> */}
            </Recommend>
            <Recommend>
              <h3>Characteristics</h3>
              {characteristicsData.map((data, index) => {
                return <Characteristics key={index} data={data} />
              })}
            </Recommend>




          </form>
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
justify-content: row;


`;

const Overall = styled.h3`
padding: 20px;

`;

const FormOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1040;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: white;


`;

const FormWrapper = styled.div`
background-color: #dcd0ff;
box-shadow: 10px 10px 10px lightblue;


`;

const Form = styled.div`

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
  margin: 0px
`;

const Yes = styled.label`

`;


