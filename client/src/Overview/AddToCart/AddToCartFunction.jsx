import React, {useState} from 'react';

function AddToCartFunction ({quantityDisabled, quantityPurchased}) {


  let enableButton = !quantityDisabled;

  console.log (enableButton, quantityPurchased, 'quantityDisabled, purchased in AddCartFunction')
  return (
    <div>
      <div>Add to Cart Button</div>
      <button disabled = {quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')}>BUY!</button>
    </div>
  )
}

export default AddToCartFunction;