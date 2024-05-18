import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default Product;
