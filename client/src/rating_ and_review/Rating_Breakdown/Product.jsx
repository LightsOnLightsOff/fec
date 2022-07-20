import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Product({ ratings }) {
  // console.log("WHAT IS THE RATING: ", ratings)
  const character = ratings.characteristics
  // console.log('ratings.characteristics', Math.round(Number(character.Fit.value)) + "0%")




  return (
    <div className="product">
      {/* <code>This will be the product ratings</code> */}

      {character.Fit !== undefined && <div>  <div>
        <Size>Fit</Size>
        <StarBreakdown>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
        </StarBreakdown>
        <ArrowDiv>
          <Arrow rating={Math.round(Number(character.Fit.value)) + "0%"} >&#9660;</Arrow>
        </ArrowDiv>


      </div>

        <BigComfort>
          <Comfort>Too small</Comfort>
          <Comfort>Perfect</Comfort>
          <Comfort>Too large</Comfort>
        </BigComfort>
      </div>

      }

      {character.Quality !== undefined && <div>
        <Size>Quality</Size>
        <StarBreakdown>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
        </StarBreakdown>
        <ArrowDiv>
          <Arrow rating={Math.round(Number(character.Quality.value)) + "0%"}>&#9660;</Arrow>
        </ArrowDiv>
        <div>
          <BigComfort>
            <Comfort>Poor</Comfort>
            <Comfort>Perfect</Comfort>
          </BigComfort>
        </div>
      </div>}


      {character.Length !== undefined && <div><div>
        <Size>Length</Size>
        <StarBreakdown>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
        </StarBreakdown>
        <ArrowDiv>
          <Arrow rating={Math.round(Number(character.Length.value)) + "0%"}>&#9660;</Arrow>
        </ArrowDiv>


      </div>

        <BigComfort>
          <Comfort>Runs Short</Comfort>
          <Comfort>Perfect</Comfort>
          <Comfort>Runs Long</Comfort>
        </BigComfort>
      </div>}

      {character.Comfort !== undefined && <div><div>
        <Size>Comfort</Size>
        <StarBreakdown>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
          <SizeFit></SizeFit>
        </StarBreakdown>
        <ArrowDiv>
          <Arrow rating={Math.round(Number(character.Comfort.value)) + "0%"}>&#9660;</Arrow>
        </ArrowDiv>


      </div>

        <BigComfort>
          <Comfort>Poor</Comfort>
          <Comfort>Perfect</Comfort>
        </BigComfort>
      </div>}

    </div>
  )
}

export default Product;


const StarBreakdown = styled.div`
position: absolute;
  display: flex;
  padding-bottom: 10px;



`;

const Breakdown = styled.span`

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
height: 15px;
padding-right: 0px;
margin: 3px;
margin-bottom: 0px;
border-radius: 7px;

`;

const Size = styled.p`
margin: 0px;
margin-top: 15px;
margin-bottom: 10px;


`;


const ArrowDiv = styled(StarBreakdown)`
justify-content: space-between;
padding-bottom: 10px;

height: 50px;
width: 270px;


`;

const Arrow = styled.p`
text-align: right;
font-size: 15px
padding: 0px;
margin-top: 0px;

position: relative;
bottom: -1px;

width: ${props => { return props.rating }};




`

const BigComfort = styled.div`
margin: 35px;
margin-left: 0px;
margin-right: 0px;
display: flex;
flex-direction: row;
justify-content: space-between;

`;




const Comfort = styled.p`
font-size: 13px;
padding: 0px;
margin-top: 0px;
padding-right: 30px;
position: relative;


`;