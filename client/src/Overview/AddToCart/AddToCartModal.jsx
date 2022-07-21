import React, {useState} from 'react';
import ReactDom from 'react-dom';

function AddToCartModal ({open, onClose, itemsInCart, setItemsInCart, totalPrice}) {
  if (!open) {
    return null
  }

  const [submit, setSubmit] = useState(false);
  var cartURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3KoNpySX6KZDN0GJtebbCnuYtu2FIClZGA&usqp=CAU'

  // console.log (price, 'price in the Modal');

  const submitButton = (event) => {
    event.preventDefault();
    setSubmit(true);
    setItemsInCart([])
    {onClose()};
  }

  return ReactDom.createPortal(
    <div>
      <div className = 'modal-overlay-styles'>
        <div className = 'modal-modal-styles'>
          <div className = 'style-add-to-cart'>
            <img className = 'cart-logo' src = {cartURL}/>
            <span className = 'added-to-cart-label'>Added to Cart!</span>
          </div>
          <div className = 'style-modal-add-to-cart'>
            <div >
              <div>
                <img className = 'cart-modal-thumbnail-image' src = {itemsInCart[0][4]}></img>
              </div>
            </div>
            <div className = 'cart-modal-product-info'>
              <div className = 'cart-modal-name'>{itemsInCart[0][0]}</div>
              <div className = 'cart-modal-style'>{itemsInCart[0][1]}</div>
              <div className = 'add-to-cart-section-label' >
                <span className = 'add-to-cart-label'>Size: </span>
                <span className = 'add-to-cart-size'>{itemsInCart[0][2]}</span>
              </div>
              <div className = 'add-to-cart-section-label'>
                <span className = 'add-to-cart-label'>Price: </span>
                <span className = 'add-to-cart-size'>${totalPrice}</span>
              </div>
            </div>
          </div>
          <div className = 'promotion'>
            <div className = 'add-to-cart-promotion'>Happy Birthday! Enter 'BDAY2022' for 10% off your ENTIRE order!!</div>
          </div>
            <div className = 'send-social-modal' id = 'add-to-cart-checkout-buttons'>
            <button onClick = {submitButton} className = 'add-to-cart-modal-buttons' style = {{cursor: 'pointer'}}>Back to Shopping</button>
            <button onClick = {submitButton} className = 'add-to-cart-modal-buttons' style = {{cursor: 'pointer'}}>Checkout {itemsInCart[0][3]} item(s)</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddToCartModal;