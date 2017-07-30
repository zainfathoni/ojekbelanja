import base from '../services/base';

export const INC_ORDER = "INC_ORDER";
export const DEC_ORDER = "DEC_ORDER";
export const SET_ORDER = "SET_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const CLEAN_ORDER = "CLEAN_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const SET_STORE_KEYWORD = "SET_STORE_KEYWORD";
export const FETCH_STORES_SUCCESS = "FETCH_STORES_SUCCESS";
export const FETCH_STORE_SUCCESS = "FETCH_STORE_SUCCESS";

export const SET_PRODUCT_KEYWORD = "SET_PRODUCT_KEYWORD";

export const orderPlus = (id) => ({
  type: INC_ORDER,
  id
});

export const orderMinus = (id) => ({
  type: DEC_ORDER,
  id
});

export const orderSet = (id, count) => ({
  type: SET_ORDER,
  id,
  count
});

export const orderRemove = (id) => ({
  type: REMOVE_ORDER,
  id
});

export const orderClean = (products) => ({
  type: CLEAN_ORDER,
  products
});

export const orderClear = () => ({
  type: CLEAR_ORDER,
});

export const userSet = (field, value) => ({
  type: SET_USER,
  field,
  value
});

export const userClear = () => ({
  type: CLEAR_USER,
});

export const storesKeywordSet = (keyword) => ({
  type: SET_STORE_KEYWORD,
  keyword
});

export const storesReceive = (stores) => ({
  type: FETCH_STORES_SUCCESS,
  stores
});

// Fetch stores from Firebase
export const storesFetch = () => base
  .fetch(`/stores`, { context: this })
  .then(stores => storesReceive(stores))
  .catch(error => {console.error(error);});

const storeReceive = (id, store) => ({
  type: FETCH_STORE_SUCCESS,
  id,
  store
});

export const storeFetch = (id) => base
  .fetch(`/stores/${id}`, { context: this })
  .then(store => storeReceive(id, store))
  .catch(error => {console.error(error);});

export const productsKeywordSet = (keyword) => ({
  type: SET_PRODUCT_KEYWORD,
  keyword
});
