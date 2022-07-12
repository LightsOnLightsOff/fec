import React, {useState, useEffect} from 'react';

import ProductDetail from './ProductDetail.jsx';
import StyleSelectorOverview from './StyleSelector/StyleSelectorOverview.jsx';
import AddToCartOverview from './AddToCart/AddToCartOverview.jsx';
import ShareSocialMedia from './ShareSocialMedia.jsx';


function Overview (props) {
  const [originalPrice, setOriginalPrice] = useState('');
  const [salePrice, setSalePrice] = useState ('');
  const [skus, setSKUS] = useState({});

  console.log ('original Price: ' + originalPrice, 'sale Price: ' + salePrice);
  console.log ('----------------------------->sku Object', skus);

  return (
    <div>
      <ProductDetail originalPrice = {originalPrice} salePrice = {salePrice}/>
      <StyleSelectorOverview setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus}/>
      <AddToCartOverview skus = {skus}/>
      <ShareSocialMedia />
    </div>
  )
}

export default Overview;