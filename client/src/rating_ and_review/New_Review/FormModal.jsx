import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function FormModal({ toggle, showModal }) {


  if (showModal) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <FormOverlay>
          <button onClick={toggle} className="modal-button">
            <span>&times;</span>
          </button>
          <FormWrapper>
            <Form>

              <form>
                <p>Will create form here</p>

              </form>
            </Form>
          </FormWrapper>
        </FormOverlay>

      </React.Fragment>, document.getElementById("root")
    )

  } else {
    null
  }
}

export default FormModal;

const FormOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1040;
width: 100vw;
height: 100vh;
opacity: 0.95;
display: flex;
align-items: center;
justify-content: center;
border: solid black;
height: 300px;
  width: 300px;
  background-color: white;


`;

const FormWrapper = styled.div`

`;

const Form = styled.div`

`;