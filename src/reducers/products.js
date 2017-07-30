import { combineReducers } from "redux";
import {
  PRODUCTS_KEYWORD_SET,
} from '../actions';

const keyword = (state = "", action) => {
  switch (action.type) {
    case PRODUCTS_KEYWORD_SET:
      return action.keyword
    default:
      return state;
  }
}

const products = combineReducers({
  keyword,
})

export default products;

export const getKeyword = (state) => state.keyword;
