import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function FormModal({ toggle, showModal }) {

  const [starIndex, setStarIndex] = useState(0)

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
              <div>
                <h4>How did the size fit?</h4>

                <Size>
                  <SizeRadio>
                  <input name="size" type="radio" value="1" />
                  <SizeList>A size too small</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="2" />
                  <SizeList>½ a size too small</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="3" />
                  <SizeList>Perfect</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="4" />
                  <SizeList>½ a size too big</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="5" />
                  <SizeList>A size too wide</SizeList>
                  </SizeRadio>
                </Size>
              </div>
              <div>
                <h4>How was the width of the product?</h4>

                <Size>
                  <SizeRadio>
                  <input name="size" type="radio" value="1" />
                  <SizeList>Too narrow</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="2" />
                  <SizeList>Slightly too Narrow</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="3" />
                  <SizeList>Perfect</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="4" />
                  <SizeList>Slightly wide</SizeList>
                  </SizeRadio>

                  <SizeRadio>
                  <input name="size" type="radio" value="5" />
                  <SizeList>Too wide</SizeList>
                  </SizeRadio>
                </Size>
              </div>
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
width: 90vw;
height: 90vh;

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

const Characteristics = styled.div`

`

const Size = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px

`;

const SizeList = styled.p`
font-size: 12px;
padding: 0px;
margin-top: 0px;
padding-left: 30px;
padding-right: 30px;
text-align: center;

`;

const SizeRadio = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px
`;
