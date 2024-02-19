// ProductDetail.js
import React, { useState, useEffect } from 'react';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/${match.params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [match.params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.productImg} alt={product.title} />
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Review: {product.review}</p>
    </div>
  );
};

export default ProductDetail;
