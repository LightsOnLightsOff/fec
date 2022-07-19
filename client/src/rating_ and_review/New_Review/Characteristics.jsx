import React, { useState } from 'react';
import styled from 'styled-components';

function Characteristics({data}) {

  const onChangeValue = (e) => {
    // console.log("CHARACTERISTICCS: ", data.state, e.target.value )
    data.state(e.target.value)

  }



  return (
    <div>
      <Title>How was the {data.character}?</Title>

      <Size>
        <SizeRadio>
          <input onChange={onChangeValue} name={data.character} type="radio" value='1' />
          <SizeList>{data['1']}</SizeList>
        </SizeRadio>

        <SizeRadio>
          <input onChange={onChangeValue} name={data.character} type="radio" value="2" />
          <SizeList>{data['2']}</SizeList>
        </SizeRadio>

        <SizeRadio>
          <input onChange={onChangeValue} name={data.character} type="radio" value="3" />
          <SizeList>{data['3']}</SizeList>
        </SizeRadio>

        <SizeRadio>
          <input onChange={onChangeValue} name={data.character} type="radio" value="4" />
          <SizeList>{data['4']}</SizeList>
        </SizeRadio>

        <SizeRadio>
          <input onChange={onChangeValue} name={data.character} type="radio" value="5" />
          <SizeList>{data['5']}</SizeList>
        </SizeRadio>
      </Size>

    </div>
  )
}

export default Characteristics;


const Title = styled.h4`
text-align: center;
`


const Size = styled.div`
  display: flex;
  flex-direction: row;
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
