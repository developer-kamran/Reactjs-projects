import {
  ADD_ITEM,
  CART_VALUES,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from './types';

const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    return { ...state, cart: action.payload };
  }
  if (action.type === CART_VALUES) {
    let { total, quantity } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.quantity += amount;
        return cartTotal;
      },
      { total: 0, quantity: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, quantity };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: action.payload,
    };
  }
  if (action.type === TOGGLE_AMOUNT) {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
};
export default reducer;
