import React, {useState} from 'react';
import AddToCartModal from './AddToCartModal.jsx'

function AddToCartFunction ({sizeOption, quantityDisabled, quantityPurchased, itemsInCart, setItemsInCart, productName, styleName, thumbnailURL}) {

  const [buttonClicked, setButtonClicked] = useState (false);
  const [newItem, setNewItem] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    var newItem = [productName, styleName, sizeOption, quantityPurchased, thumbnailURL];
    itemsInCart.push(newItem);
    setItemsInCart(itemsInCart)
    setButtonClicked (true)
  }

  return (
    <span>
      <button disabled = {quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')} onClick = {handleClick} className = 'drop-down-menu' style = {{backgroundColor : (quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')) ? 'default' : '#A6ECE0'}} id = 'add-to-cart-style'>Add To Cart</button>
      <AddToCartModal open = {buttonClicked} onClose = {() => setButtonClicked(false)}  itemsInCart = {itemsInCart} setItemsInCart = {setItemsInCart}></AddToCartModal>
    </span>
  )
}

export default AddToCartFunction;