import React, { useState } from 'react';
import styled from 'styled-components';

function Characteristics({data, displayError}) {

  const onChangeValue = (e) => {
    console.log("CHARACTERISTICCS: ", e.target.value )
    // data.state(e.target.value)

  }



  return (
    <Div>
      <Title>How was the {data.character}?<Need>*</Need></Title>
      {displayError && <Error>Please answer</Error>}


      <Size>
      <SizeRadio>
          <Select onChange={onChangeValue}>
            <Option value='1'>{data['1']}</Option>
            <Option value='2'>{data['2']}</Option>
            <Option value='3'>{data['3']}</Option>
            <Option value='4'>{data['4']}</Option>
            <Option value='5'>{data['5']}</Option>

          </Select>
        </SizeRadio>


      </Size>

    </Div>
  )
}

export default Characteristics;

const Div = styled.div`
padding: 25px;

`
const Need = styled.span`
color: red;
`
const Error = styled.code`
color: red;

`;


const Title = styled.h4`
text-align: center;
white-space: nowrap;

`


const Size = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Select = styled.select`
width: 120px;
height: 30px;
border: 1px solid #999;
font-size: 14px;
background-color: #eee;
border-radius: 5px;
box-shadow: 4px 4px #ccc;

`;

const Option = styled.option`
padding: 15px;

`;
