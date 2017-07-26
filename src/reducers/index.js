import { combineReducers } from "redux";
import cost from "./cost";
import keyword from "./keyword";
import order from "./order";
import user from "./user";

const ojekBelanja = combineReducers({
  cost,
  keyword,
  order,
  user
});

export default ojekBelanja;
