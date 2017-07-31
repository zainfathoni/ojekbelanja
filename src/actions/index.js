import { getStoreIsFetching, getProductIsFetching } from '../reducers';
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
export const FETCH_STORES_REQUEST = "FETCH_STORES_REQUEST";
export const FETCH_STORES_SUCCESS = "FETCH_STORES_SUCCESS";
export const FETCH_STORES_FAILURE = "FETCH_STORES_FAILURE";
export const FETCH_STORE_SUCCESS = "FETCH_STORE_SUCCESS";

export const SET_PRODUCT_KEYWORD = "SET_PRODUCT_KEYWORD";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";


export const incOrder = (id) => ({
  type: INC_ORDER,
  id,
});

export const decOrder = (id) => ({
  type: DEC_ORDER,
  id,
});

export const setOrder = (id, count) => ({
  type: SET_ORDER,
  id,
  count,
});

export const removeOrder = (id) => ({
  type: REMOVE_ORDER,
  id,
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});

export const setUser = (field, value) => ({
  type: SET_USER,
  field,
  value,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setStoreKeyword = (keyword) => ({
  type: SET_STORE_KEYWORD,
  keyword,
});

export const fetchStores = () => (dispatch, getState) => {
  if (getStoreIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_STORES_REQUEST,
  });

  return base
    .fetch(`/stores`, { context: this })
    .then(stores => dispatch({
      type: FETCH_STORES_SUCCESS,
      stores,
    }))
    .catch(error => dispatch({
      type: FETCH_STORES_FAILURE,
      message: error.message || 'Tetap Tenang Tetap Semangat',
    }));
}

export const fetchStore = (id) => (dispatch, getState) => {
  if (getStoreIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_STORES_REQUEST,
  });

  return base
    .fetch(`/stores/${id}`, { context: this })
    .then(store => dispatch({
      type: FETCH_STORE_SUCCESS,
      id,
      store,
    }))
    .catch(error => dispatch({
      type: FETCH_STORES_FAILURE,
      message: error.message || 'Tetap Tenang Tetap Semangat',
    }));
}

export const setProductKeyword = (keyword) => ({
  type: SET_PRODUCT_KEYWORD,
  keyword,
});

export const fetchProducts = (id) => (dispatch, getState) => {
  if (getProductIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });

  return base
    .fetch(`/products/${id}`, { context: this })
    .then(({ categories, items }) => {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        categories,
        items,
      });
      // dispatch({
      //   type: CLEAN_ORDER,
      //   products: items,
      // });
    })
    .catch(error => dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      message: error.message || 'Tetap Tenang Tetap Semangat',
    }));
}
