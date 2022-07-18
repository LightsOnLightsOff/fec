import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function SearchBar(props) {

  const [searchBody, setSearchBody] = useState('')
  const [searchSummary, setSearchSummary] = useState('')




  return (
    <div>
      <Input type="text" placeholder="Search Reviews"></Input>

    </div>
  )
}

export default SearchBar;

const Input = styled.input`

`;
