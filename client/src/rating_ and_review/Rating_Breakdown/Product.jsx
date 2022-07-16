import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Product ({ratings}) {


  return (
    <div className="product">
      {/* <code>This will be the product ratings</code> */}

      <div>
       <Size>Size</Size>
       <StarBreakdown>
        <SizeFit></SizeFit>
        <SizeFit></SizeFit>
        <SizeFit></SizeFit>
       </StarBreakdown>
       <div>
        <BigComfort>
          <Comfort>Too small</Comfort>
          <Comfort>Perfect</Comfort>
          <Comfort>Too large</Comfort>
        </BigComfort>
       </div>
      </div>

      <div>
       <Size>Comfort</Size>
       <StarBreakdown>
        <SizeFit></SizeFit>
        <SizeFit></SizeFit>
        <SizeFit></SizeFit>
       </StarBreakdown>
       <div>
        <BigComfort>
          <Comfort>Poor</Comfort>
          <Comfort>Perfect</Comfort>
        </BigComfort>
       </div>
      </div>

    </div>
  )
}

export default Product;


const StarBreakdown = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px


`;

const Breakdown = styled.span`
  width: 200px;
  height: 8px;
  border-width: thin;
  margin-top: 4px;
  margin-left: 10px;
  background-color: #ddd

`;

const NumStar = styled.p`
margin: 0px;
padding: 0px
padding-right: 5px;
text-decoration: underline;

`

const SizeFit = styled(Breakdown)`
width: 79px;
padding-right: 0px;
margin: 3px;
margin-bottom: 0px
&:after {
    content: "\\25BC";
    position: absolute;
    left: 0;
    top: 0;
    width: 80%;
    overflow: hidden;
    color: #f80;
}
`;

const Size = styled.p`
margin: 0px;
margin-top: 15px;


`;
const BigComfort = styled(StarBreakdown)`
justify-content: space-between;
`;

const Comfort = styled.p`
font-size: 12px;
padding: 0px;
margin-top: 0px;
padding-right: 30px;


`;