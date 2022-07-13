import React, {useState, useEffect} from 'react';

function SizeSelector ({skus, activateQuantity, setSizeOption, setQuantityAvailable, defaultSKU, setSKUS}) {

  console.log(defaultSKU, 'default SKU in sizeSelector')

  useEffect(() => {
    console.log(defaultSKU, 'default SKU in useeffect')
    var sku = defaultSKU.skus
    console.log (sku, 'sku before setSKUS in sizeSelector')
    setSKUS(sku)
  })

  let sizeArray = [];
  let quantityArray = [];
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
      <div>
        <div>Size Selector</div>
          <select onChange = {handleSelect}>
            <option selected value ='Select Size'>Select Size</option>
            {sizeArray.map(size => {
              return <option value = {size}>{size}</option>
            })}
          </select>
      </div>
    )
  } else {
    return (
      <div>
        <div>Size Selector</div>
        <select disabled = {true}>
          <option selected value ='OUT OF STOCK'>OUT OF STOCK</option>
        </select>
      </div>
    )
  }
}

export default SizeSelector;