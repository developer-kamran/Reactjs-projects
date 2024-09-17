import React from 'react';
import { useGlobalContext } from '../../context';

const Product = ({ product }) => {
  const { addItem } = useGlobalContext();
  const { title, id, image, price, disabled } = product;
  return (
    <article className='product'>
      <div className='img-container'>
        <img className='product-img' src={image} alt='NA' />
        <button
          className='bag-btn'
          data-id={id}
          onClick={(e) => addItem(e)}
          disabled={disabled}
        >
          {!disabled && <i className='fas fa-shopping-cart'></i>}
          {disabled ? 'In Cart ' : 'Add To Cart'}
        </button>
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
};

export default Product;
