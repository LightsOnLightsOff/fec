import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//data of reviewList will be passed down here and filter out the reviews here

function Sorting({ data, sortData }) {

  const [sort, setSort] = useState(" Relevant") //
  const [dropDown1, setDropDown1] = useState(" Newest")
  const [dropDown2, setDropDown2] = useState(" Helpful") //

  const clickSort = (num) => {
    // console.log("WHAT IS NUM: ", num)
    if (num === 1) {
      //const dropDownValue = dropDown1
      setSort(dropDown1)
      setDropDown1(sort)
      sortData(dropDown1)
    } else if (num === 2) {
      setSort(dropDown2)
      setDropDown2(sort)
      sortData(dropDown2)
    }

  }


  return (
    <div className="sort">
      <div>
        <h3>{data.length} Reviews, Sorted by </h3>
      </div>
      <div>
        <div className="dropDown">
          <div className="filter">
          <h3 onClick={clickSort} className="helpful"> {sort} <FontAwesomeIcon className="arrowDown" icon={faAngleDown} /> </h3>
          </div>

          <div className="sortList">
            <h3 onClick={() => {clickSort(1)}} value="newest" className="newest">{dropDown1}</h3>
            <h3 onClick={() => {clickSort(2)}} value="helpful" className="relevant">{dropDown2}</h3>
          </div>
        </div>


      </div>
      {/* <div>
        {data.length} of Reviews, Sorted by <span className="relevant">{sort}</span>
      </div>
      <div>
        <ul className="dropDown">
          <li>Newest</li>
          <li>Helpful</li>
        </ul>

      </div> */}
    </div >
  )
}

export default Sorting;