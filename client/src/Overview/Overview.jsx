import React, {useState, useEffect} from 'react';

import ProductDetail from './ProductDetail.jsx';
import ImageGalleryOverview from './ImageGallery/ImageGalleryOverview.jsx';
import StyleSelectorOverview from './StyleSelector/StyleSelectorOverview.jsx';
import AddToCartOverview from './AddToCart/AddToCartOverview.jsx';
import ShareSocialMedia from './ShareSocialMedia.jsx';


function Overview (props) {
  const [originalPrice, setOriginalPrice] = useState('');
  const [salePrice, setSalePrice] = useState ('');
  const [skus, setSKUS] = useState({});
  const [productName, setProductName] = useState('');
  const [styleName, setStyleName] = useState('');
  const [thumbnailURL, setThumbnailURL] = useState('');
  const [defaultSKU, setDefaultSKU] = useState({});

  return (
    <div>
      <ProductDetail originalPrice = {originalPrice} salePrice = {salePrice} setProductName = {setProductName}/>
      <ImageGalleryOverview />
      <StyleSelectorOverview setOriginalPrice = {setOriginalPrice} setSalePrice = {setSalePrice} setSKUS = {setSKUS} skus = {skus} setStyleName = {setStyleName} setThumbnailURL = {setThumbnailURL} setDefaultSKU = {setDefaultSKU}/>
      <AddToCartOverview skus = {skus} defaultSKU = {defaultSKU} setSKUS = {setSKUS} productName = {productName} styleName = {styleName} thumbnailURL = {thumbnailURL}/>
      <ShareSocialMedia />
    </div>
  )
}

export default Overview;