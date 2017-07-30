import { combineReducers } from "redux";
import order from "./order";
import user from "./user";
import stores, * as fromStores from "./stores";
import products, * as fromProducts from "./products";

const ojekBelanja = combineReducers({
  stores,
  products,
  order,
  user,
});

export default ojekBelanja;

export const getStores = (state) => fromStores.getStores(state.stores);
export const getStore = (state, id) => fromStores.getStore(state.stores, id);
export const getStoreKeyword = (state) => fromStores.getKeyword(state.stores);
export const getStoreIsFetching = (state) => fromStores.getIsFetching(state.stores);
export const getStoreError = (state, node) => fromStores.getError(state.stores);

export const getProductKeyword = (state) => fromProducts.getKeyword(state.products);
