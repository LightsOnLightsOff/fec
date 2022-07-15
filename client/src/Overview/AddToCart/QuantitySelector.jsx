import React, {useState} from 'react';

function QuantitySelector ({quantityDisabled, quantityAvailable, setQuantityPurchased}) {

  let maxQuantity = (quantityAvailable > 15) ? 15 : quantityAvailable;
  let quantityArray = [];

  for (let i = 1; i <= maxQuantity; i++) {
    quantityArray.push(i);
  }

  const handleSelect = (event) => {
    setQuantityPurchased(event.target.value)
  }

  return (
    <span>
      <select disabled = {quantityDisabled} onChange = {handleSelect}>
        <option selected value = 'Select Quantity'>Select Quantity</option>
       {quantityArray.map((count) => {
         return <option value = {count}>{count}</option>
       })}
      </select>
    </span>
  )
}

export default QuantitySelector;
