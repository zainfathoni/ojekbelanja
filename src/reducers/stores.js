import { combineReducers } from "redux";
import {
  SET_STORE_KEYWORD,
  FETCH_STORES_REQUEST,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAILURE,
  FETCH_STORE_SUCCESS
} from "../actions";

const items = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORES_SUCCESS:
      return action.stores;
    case FETCH_STORE_SUCCESS:
      return { ...state, [action.id]: action.store };
    default:
      return state;
  }
};

const keyword = (state = "", action) => {
  switch (action.type) {
    case SET_STORE_KEYWORD:
      return action.keyword;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_STORES_REQUEST:
      return true;
    case FETCH_STORES_SUCCESS:
    case FETCH_STORE_SUCCESS:
    case FETCH_STORES_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_STORES_FAILURE:
      return action.message;
    case FETCH_STORES_REQUEST:
    case FETCH_STORES_SUCCESS:
    case FETCH_STORE_SUCCESS:
      return null;
    default:
      return state;
  }
};

const stores = combineReducers({
  items,
  keyword,
  isFetching,
  error
});

export default stores;

export const getStores = state => state.items;
export const getStore = (state, id) => state.items[id];
export const getCost = (state, id) => state.items[id].cost;
export const getKeyword = state => state.keyword;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;

export const isMatching = (state, id) => {
  const keyword = getKeyword(state);
  const item = getStore(state, id);
  return (
    item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
    item.area.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
};

export const getFilteredStoreCards = state =>
  Object.keys(state.items)
    .filter(key => isMatching(state, key))
    .map(key => {
      const store = getStore(state, key);
      return {
        id: key,
        title: store.name,
        description: store.area,
        image: require(`../css/images/${store.image}`),
        price: store.cost,
        unit: "pengiriman"
      };
    })
    .reduce(
      (res, i) => ({
        ...res,
        [i.id]: i
      }),
      {}
    );
