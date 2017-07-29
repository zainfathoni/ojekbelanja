import { combineReducers } from "redux";
import keyword from "./keyword";
import order from "./order";
import user from "./user";

const ojekBelanja = combineReducers({
  keyword,
  order,
  user
});

export default ojekBelanja;
