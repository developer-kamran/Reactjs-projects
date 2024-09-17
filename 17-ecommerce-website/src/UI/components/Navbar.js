import React from 'react';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { state, showCartModal, cartModal } = useGlobalContext();
  return (
    <>
      <div className='navbar'>
        <div className='navbar-center'>
          <span className='nav-icon'>
            <i className='fas fa-bars'></i>
          </span>
          <img src='./assets/images/logo.svg' alt='' />
          <div className='cart-btn' onClick={() => showCartModal(!cartModal)}>
            <span className='nav-icon'>
              <i className='fas fa-cart-plus'></i>
            </span>
            <div className='cart-items'>{state.quantity}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
