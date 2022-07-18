import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../config.js'

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

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65633', {
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
  }, [])

  return (
    <div>
      <div>------------------List of Product Details--------------</div>
        <div>{category}</div>
        <div>{name}</div>
        <div>Star Rating! Get the SubComponent from Louisa. Also add hyperlink to scroll down the page to Ratings and Review</div>
        <div>Product Features: </div>
        {featureKey.map((featureValue) => {
          return  <div key = {featureValue}>
                    <img className = 'check-logo' src = {checkLogo}/>
                    {featureValue[0]}: {featureValue[1]}
                  </div>
        })}
        {originalPrice && !salePrice ? <div>Price: {originalPrice}</div> : <div>Sale Price! {originalPrice} {salePrice}</div>}
        <div>{slogan}</div>
        <div>{description}</div>
    </div>
  )
}

export default ProductDetail;