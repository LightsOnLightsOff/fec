import React, {useState} from 'react'

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartFunction from './AddToCartFunction.jsx';

function AddToCartOverview ({skus, productName, styleName, thumbnailURL, defaultSKU, setSKUS, originalPrice, salePrice}) {
  const [sizeOption, setSizeOption] = useState('');
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [quantityDisabled, setQuantityDisabled] = useState(true);
  const [quantityPurchased, setQuantityPurchased] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  const activateQuantity = (size) => {
    if (size != 'Select Size') {
      setQuantityDisabled(false);
    } else {
      setQuantityDisabled(true);
      setQuantityPurchased('Select Quantity')
    }
  }

  return (
    <div>
      <div className = 'select-size-quantity-buttons'>
        <SizeSelector skus = {skus} defaultSKU = {defaultSKU} setSKUS = {setSKUS} activateQuantity = {activateQuantity} setSizeOption = {setSizeOption} setQuantityAvailable = {setQuantityAvailable}/>
        <AddToCartFunction sizeOption = {sizeOption} quantityDisabled = {quantityDisabled} quantityPurchased = {quantityPurchased} setItemsInCart = {setItemsInCart} productName = {productName} styleName = {styleName} thumbnailURL = {thumbnailURL} itemsInCart = {itemsInCart} setItemsInCart = {setItemsInCart} originalPrice = {originalPrice} salePrice = {salePrice}/>
      </div>
      <div className = 'add-to-cart-button'>
        <QuantitySelector quantityDisabled = {quantityDisabled} quantityAvailable = {quantityAvailable} setQuantityPurchased = {setQuantityPurchased}/>
      </div>
    </div>
  )
}

export default AddToCartOverview;