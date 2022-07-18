import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function SearchBar({filter, data}) {
  console.log("WHAT DOES THE DATA LOOK LIKE: ", data)

  const [searchReview, setSearchReview] = useState('')

  const filterFunction = (e) => {
    console.log("WE GOT INPUT:", e.target.value)
    var newValue = e.target.value

    const filterData = data.filter((eachReview) => {
      return eachReview.summary.toLowerCase().includes(newValue.toLowerCase()) || eachReview.body.toLowerCase().includes(newValue.toLowerCase())
    })

    console.log("SEARCHED DATA: ", filterData)
    const splitFilter = filterData.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2))
      }
      return result
    }, [])

    filter(filterData, splitFilter)

  }







  return (
    <div>
      <Input onChange={filterFunction} type="text" placeholder="Search Reviews"></Input>

    </div>
  )
}

export default SearchBar;

const Input = styled.input`

`;
