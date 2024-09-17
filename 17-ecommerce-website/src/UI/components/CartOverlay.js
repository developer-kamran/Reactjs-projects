import React from 'react';
import { useGlobalContext } from '../../context';

const CartOverlay = () => {
  const {
    cartModal,
    showCartModal,
    state,
    removeItem,
    toggleAmount,
    clearCart,
  } = useGlobalContext();
  return (
    <div
      className={cartModal ? 'cart-overlay transparentBcg ' : 'cart-overlay'}
    >
      <div className={cartModal ? 'cart showCart' : 'cart'}>
        <span className='close-cart'>
          <i
            className='fas fa-window-close'
            onClick={() => showCartModal(!cartModal)}
          ></i>
        </span>
        <h2>your cart</h2>

        <div className='cart-content'>
          {state.cart.map((singleItem, index) => {
            const { amount, title, id, image, price } = singleItem;

            return (
              <div className='cart-item' key={index}>
                <img src={image} alt='' />
                <div>
                  <h4>{title}</h4>
                  <h5>${price}</h5>
                  <span
                    className='remove-item'
                    onClick={(e) => removeItem(e)}
                    data-id={id}
                  >
                    remove
                  </span>
                </div>
                <div>
                  <i
                    className='fas fa-chevron-up'
                    onClick={() => toggleAmount(id, 'inc')}
                  ></i>
                  <p className='item-amount'>{amount}</p>
                  <i
                    className='fas fa-chevron-down'
                    onClick={() => toggleAmount(id, 'dec')}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className='cart-footer'>
          <h3>
            Your Total: $<span className='cart-total'>{state.total}</span>
          </h3>
          <button className='clear-cart banner-btn' onClick={() => clearCart()}>
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
