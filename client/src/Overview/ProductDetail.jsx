import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import config from '../../../config.js';
import StarRating from './StarRating.jsx';
import { UserContext } from '../index.jsx';
//my current DEFAULT product: Camo Onesie (id: 65631)

function ProductDetail ({originalPrice, salePrice, setProductName}) {

  const [id, setID] = useState(0);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');
  const [featureKey, setFeatureKey] = useState([]);

  var tempArray = [];
  var checkLogo = 'https://i.pinimg.com/originals/c7/75/fc/c775fc6d3433da085d8f579f54b7c758.jpg';
  var percentDiscount;

  const context = useContext(UserContext)

  useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${context.productInfo.id}`, {
     params: { page: 1, count: 1 },
     headers: {
       Authorization: config.TOKEN
     }
    })
    .then(res => {
      let productDetail = res.data;
      var featureValue = productDetail.features;
      for (let i = 0; i < featureValue.length; i++) {
        var feature = Object.values(featureValue[i]);
        tempArray.push(feature)
      }
      setFeatureKey(tempArray);
      setID(productDetail.id);
      setCategory(productDetail.category);
      setName(productDetail.name);
      setProductName(productDetail.name)
      setSlogan(productDetail.slogan);
      setDescription(productDetail.description);
    })
  }, [context.productInfo.id])

  if (salePrice) {
    percentDiscount = ((originalPrice - salePrice) / originalPrice * 100).toFixed(2);
  }

  return (
    <div className = 'product-detail'>
        <div className = 'product-category'>{category}</div>
        <div className = 'product-name'>{name}</div>
        <StarRating/>
        {originalPrice && !salePrice ?
          <div>
            <span className = 'product-original-price-label'>Price: </span>
            <span className = 'product-original-price-number'>${originalPrice}</span>
          </div> :
          <div>
            <span className = 'product-original-price-label'>Sale Price! </span>
            <span className = 'original-price-strikethrough'>${originalPrice}</span>
            <span className = 'product-sale-price'>    ${salePrice} ({percentDiscount})% off!</span>
          </div>
        }
        <div className = 'product-slogan'>{slogan}</div>
        <div className = 'product-description'>{description}</div>
        <div className = 'product-overall-feature'>
          {featureKey.map((featureValue) => {
            return  <div key = {featureValue}>
                      <img className = 'check-logo' src = {checkLogo}/>
                      <span className  = 'product-feature' >{featureValue[0]}: {featureValue[1]}</span>
                    </div>
          })}
        </div>
    </div>
  )
}

export default ProductDetail;