import React, { useState, useEffect, useReducer, useContext } from 'react';
import { products } from './data';
import reducer from './UI/reducer';
import {
  ADD_ITEM,
  CART_VALUES,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CLEAR_CART,
} from './UI/reducer/types';
const AppContext = React.createContext();

const getLocalStorage = () => {
  let products = localStorage.getItem('Products');
  if (products) {
    return JSON.parse(localStorage.getItem('Products'));
  }
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  total: 0,
  quantity: 0,
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [cartModal, showCartModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e) => {
    showCartModal(true);
    let id = e.target.dataset.id;
    let btn = products.find((product) => product.id === id);
    btn.disabled = true;
    let cartItem = { ...getProduct(id), amount: 1 };
    let cart = [...state.cart, cartItem];
    dispatch({ type: ADD_ITEM, payload: cart });
    dispatch({ type: CART_VALUES, payload: cart });
  };

  const removeItem = (e) => {
    let id = e.target.dataset.id;
    const cartItem = state.cart.filter((item) => item.id !== id);
    let btn = products.find((product) => product.id === id);
    btn.disabled = false;
    dispatch({ type: REMOVE_ITEM, payload: cartItem });
  };
  function getProduct(id) {
    return products.find((product) => product.id === id);
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
    dispatch({ type: CART_VALUES, payload: state.cart });
  };

  useEffect(() => {
    dispatch({ type: CART_VALUES, payload: state.cart });
    localStorage.setItem('Products', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        cartModal,
        showCartModal,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
