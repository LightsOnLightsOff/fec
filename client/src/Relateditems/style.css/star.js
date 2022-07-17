import styled from 'styled-components'



export const ColorRating = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  color: #ddd;

  &:after {
    font-family: FontAwesome;
    content: ' \\2605\\2605\\2605\\2605\\2605';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({wid})=>wid};
    overflow: hidden;
    color: #f80;
  }
`
