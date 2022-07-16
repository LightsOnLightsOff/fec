import React, {useState} from 'react'

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartFunction from './AddToCartFunction.jsx';

function AddToCartOverview ({skus, productName, styleName, thumbnailURL, defaultSKU, setSKUS}) {
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
  //console.log(itemsInCart, 'current Cart Status in AddCartOverview')
  return (
    <div>
      <div className = 'add-to-cart-section'>
          <SizeSelector skus = {skus} defaultSKU = {defaultSKU} setSKUS = {setSKUS} activateQuantity = {activateQuantity} setSizeOption = {setSizeOption} setQuantityAvailable = {setQuantityAvailable}/>
          <QuantitySelector quantityDisabled = {quantityDisabled} quantityAvailable = {quantityAvailable} setQuantityPurchased = {setQuantityPurchased}/>
          <AddToCartFunction sizeOption = {sizeOption} quantityDisabled = {quantityDisabled} quantityPurchased = {quantityPurchased} setItemsInCart = {setItemsInCart} productName = {productName} styleName = {styleName} thumbnailURL = {thumbnailURL} itemsInCart = {itemsInCart} setItemsInCart = {setItemsInCart} />
      </div>
    </div>
  )
}

export default AddToCartOverview;