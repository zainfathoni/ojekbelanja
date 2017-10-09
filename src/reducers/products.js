import { combineReducers } from "redux";
import {
  SET_PRODUCT_KEYWORD,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions";

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.categories;
    default:
      return state;
  }
};

const items = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.items;
    default:
      return state;
  }
};

const keyword = (state = "", action) => {
  switch (action.type) {
    case SET_PRODUCT_KEYWORD:
      return action.keyword;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return true;
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FAILURE:
      return action.message;
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_PRODUCTS_SUCCESS:
      return null;
    default:
      return state;
  }
};

const products = combineReducers({
  categories,
  items,
  keyword,
  isFetching,
  error
});

export default products;

export const getCategories = state => state.categories;
export const getCategory = (state, id) => state.categories[id];
export const getProducts = state => state.items;
export const getProduct = (state, id) => state.items[id];
export const getKeyword = state => state.keyword;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;

export const isMatching = (state, id) => {
  const keyword = getKeyword(state);
  const item = getProduct(state, id);
  return (
    item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
    item.desc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
    getCategory(state, item.category)
      .toLowerCase()
      .indexOf(keyword.toLowerCase()) !== -1
  );
};
