import React, {useState, useEffect} from 'react';

function SizeSelector ({skus, activateQuantity, setSizeOption, setQuantityAvailable, defaultSKU, setSKUS}) {

  let sizeArray = [];
  let quantityArray = [];

  useEffect(() => {
    var sku = defaultSKU.skus
    setSKUS(sku)
  })

  for (var key in skus) {
    if (skus[key].quantity > 0) {
      sizeArray.push(skus[key].size)
      quantityArray.push(skus[key].quantity)
    }
  }

  const handleSelect = (event) =>{
    setSizeOption(event.target.value)
    let index = sizeArray.indexOf(event.target.value);
    let unitsAvailable = quantityArray[index];
    setQuantityAvailable(unitsAvailable);
    activateQuantity(event.target.value)
  }

  if (sizeArray.length){
    return (
      <span>
          <select onChange = {handleSelect} className = 'drop-down-menu'>
            <option selected value ='Select Size'>Select Size</option>
            {sizeArray.map(size => {
              return <option value = {size} key = {size}>{size}</option>
            })}
          </select>
      </span>
    )
  } else {
    return (
      <span>
        <select disabled = {true}>
          <option selected value ='OUT OF STOCK'>OUT OF STOCK</option>
        </select>
      </span>
    )
  }
}

export default SizeSelector;