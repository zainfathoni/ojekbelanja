import { combineReducers } from "redux";
import order from "./order";
import cost from "./cost";
import keyword from "./keyword";

const ojekBelanja = combineReducers({
  order,
  cost,
  keyword
});

export default ojekBelanja;
