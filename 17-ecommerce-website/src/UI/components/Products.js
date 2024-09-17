import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import Product from './Product';

const Products = () => {
  return (
    <>
      <section className='products'>
        <div className='section-title'>
          <h2>Our Products</h2>
        </div>
        <div className='products-center'>
          {products.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
