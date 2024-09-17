import {
  CLEAR_LIST,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  SHOW_ALERT,
} from './actions';
export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, list: [] };
  }
  if (action.type === ADD_ITEM) {
    const id = new Date().getTime().toString();
    return { ...state, list: [...state.list, { title: action.payload, id }] };
  }
  if (action.type === EDIT_ITEM) {
    const updatedItem = state.list.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, title: action.payload.name };
      }
      return item;
    });
    return { ...state, list: updatedItem };
  }
  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === SHOW_ALERT) {
    return { ...state, showAlert: action.payload };
  }
  return state;
};
