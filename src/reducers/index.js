import { combineReducers } from "redux";
import order, * as fromOrder from "./order";
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
export const getCost = (state, id) => fromStores.getStore(state.stores, id);
export const getStoreKeyword = (state) => fromStores.getKeyword(state.stores);
export const getStoreIsFetching = (state) => fromStores.getIsFetching(state.stores);
export const getStoreError = (state) => fromStores.getError(state.stores);

export const getCategories = (state) => fromProducts.getCategories(state.products);
export const getProducts = (state) => fromProducts.getProducts(state.products);
export const getProductKeyword = (state) => fromProducts.getKeyword(state.products);
export const getProductIsFetching = (state) => fromProducts.getIsFetching(state.products);
export const getProductError = (state) => fromProducts.getError(state.products);

export const getOrder = (state) => fromOrder.getOrder(state.order);

export const getTotal = (state) => {
  const order = fromOrder.getOrder(state.order);
  const products = fromProducts.getProducts(state.products);
  return Object.keys(products).length ?
    Object.keys(order)
      .reduce((sum, key) =>
        sum + (products[key].price * products[key].step * order[key]),
        0
      )
  :
    0;
}
