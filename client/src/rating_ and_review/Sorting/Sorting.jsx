import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//data of reviewList will be passed down here and filter out the reviews here

function Sorting({ data }) {

  const [sort, setSort] = useState(" Relevant")


  return (
    <div className="sort">
      <div>
        <h3>{data.length} Reviews, Sorted by </h3>
      </div>
      <div>
        <div className="dropDown">
          <div className="filter">
          <h3 className="relevant"> {sort} <FontAwesomeIcon className="arrowDown" icon={faAngleDown} /> </h3>
          </div>

          <div className="sortList">
            <h3 className="newest">Newest</h3>
            <h3 className="helpful">Helpful</h3>
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