import React, {useState} from 'react'

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartFunction from './AddToCartFunction.jsx';

function AddToCartOverview ({skus}) {
  const [sizeOption, setSizeOption] = useState('Select Size');
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [quantityDisabled, setQuantityDisabled] = useState(true);
  const [quantityPurchased, setQuantityPurchased] = useState(0);

  const activateQuantity = (size) => {
    if (size != 'Select Size') {
      setQuantityDisabled(false);
    } else {
      setQuantityDisabled(true);
      setQuantityPurchased('Select Quantity')
    }
  }

  console.log (quantityDisabled, 'Quantity Disabled')
  console.log (sizeOption, 'size option in overview')
  console.log (quantityAvailable, 'quantity option in overview')
  console.log (quantityPurchased, 'quantity purchased in overview')

  return (
    <div>
      <div>Add to Cart Overall Function</div>
      <div>{sizeOption}</div>
      <SizeSelector skus = {skus} activateQuantity = {activateQuantity} setSizeOption = {setSizeOption} setQuantityAvailable = {setQuantityAvailable}/>
      <QuantitySelector quantityDisabled = {quantityDisabled} quantityAvailable = {quantityAvailable} setQuantityPurchased = {setQuantityPurchased}/>
      <AddToCartFunction quantityDisabled = {quantityDisabled} quantityPurchased = {quantityPurchased}/>
    </div>
  )
}

export default AddToCartOverview;