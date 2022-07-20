import React, {useState} from 'react';
import ReactDom from 'react-dom';

function AddToCartModal ({open, onClose, itemsInCart, setItemsInCart}) {
  if (!open) {
    return null
  }
  const [submit, setSubmit] = useState(false);
  var cartURL = 'https://thumbs.dreamstime.com/b/shopping-cart-icon-blue-color-design-perfect-use-print-media-web-stock-images-commercial-any-kind-project-209472475.jpg'

  console.log (itemsInCart, 'in the Modal');

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
            <span>Added to Cart!</span>
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
              <div>Size: {itemsInCart[0][2]}</div>
              <div className = 'cart-modal-price'>Price: </div>
            </div>
          </div>
          <div>Happy Birthday! Enter 'BDAY2022' for 10% off ENTIRE order!!</div>
          <div className = 'send-social-modal'>
            <button onClick = {submitButton} style = {{cursor: 'pointer'}}>Back to Shopping</button>
            <button onClick = {submitButton} style = {{cursor: 'pointer'}}>Checkout {itemsInCart[0][3]} item(s)</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddToCartModal;