import { combineReducers } from "redux";
import {
  STORES_KEYWORD_SET,
  STORES_RECEIVE,
  STORE_RECEIVE,
} from '../actions';

const items = (state = {}, action) => {
  switch (action.type) {
    case STORES_RECEIVE:
      return action.stores;
    case STORE_RECEIVE:
      return { ...state, [action.id]: action.store };
    default:
      return state;
  }
}

const keyword = (state = "", action) => {
  switch (action.type) {
    case STORES_KEYWORD_SET:
      return action.keyword
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const stores = combineReducers({
  items,
  keyword,
  isFetching,
  errorMessage,
})

export default stores;

export const getStores = (state) => state.items;
export const getStore = (state, id) => state.items[id];
export const getKeyword = (state) => state.keyword;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
