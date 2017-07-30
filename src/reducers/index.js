import { combineReducers } from "redux";
import keyword from "./keyword";
import order from "./order";
import user from "./user";
import stores from "./stores";

const ojekBelanja = combineReducers({
  keyword,
  order,
  user,
  stores,
});

export default ojekBelanja;
