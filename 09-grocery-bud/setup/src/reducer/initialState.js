const getLocalStorage = () => {
  let list = localStorage.getItem('List');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

export const initialState = {
  list: getLocalStorage(),
  showAlert: {
    show: false,
    type: '',
    msg: '',
  },
};
