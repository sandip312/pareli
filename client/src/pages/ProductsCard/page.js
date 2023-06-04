import React from 'react';
import Card from '../Card/page';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    // Add more products as needed
  ];

  return (
    <div >
      <h1>Products</h1>
      <div className="card-container">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
