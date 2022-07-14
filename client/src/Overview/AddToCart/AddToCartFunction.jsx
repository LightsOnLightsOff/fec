import React, {useState} from 'react';

function AddToCartFunction ({sizeOption, quantityDisabled, quantityPurchased, setItemsInCart, productName, styleName, thumbnailURL, itemsInCart}) {

  const handleClick = (event) => {
    event.preventDefault();
    var newItem = [productName, styleName, sizeOption, quantityPurchased, thumbnailURL];
    itemsInCart.push(newItem);
    setItemsInCart(itemsInCart)
  }

  return (
    <div>
      <div>---------------Add to Cart Button---------------</div>
      <button disabled = {quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')} onClick = {handleClick}>Add To Cart</button>
    </div>
  )
}

export default AddToCartFunction;