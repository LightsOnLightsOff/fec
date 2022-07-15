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


  useEffect(() => {
    //used to find products, DELETE AFTERWARDS
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products', {
     //params: { page: 1, count: 1 },
     headers: {
       Authorization: config.TOKEN
     }
    })
    .then(res => {
      console.log('this is the response', res.data)
    })

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65633', {
     params: { page: 1, count: 1 },
     headers: {
       Authorization: config.TOKEN
     }
    })
    .then(res => {
      console.log('this is the response', res.data)
      let productDetail = res.data;
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
        <div>{id}</div>
        <div>{category}</div>
        <div>{name}</div>
        {originalPrice && !salePrice ? <div>Price: {originalPrice}</div> : <div>Sale Price! {originalPrice} {salePrice}</div>}
        <div>{slogan}</div>
        <div>{description}</div>
    </div>
  )
}

export default ProductDetail;