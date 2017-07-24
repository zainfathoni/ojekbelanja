import { combineReducers } from "redux";
import order from "./order";
import cost from "./cost";

const ojekBelanja = combineReducers({
  order,
  cost
});

export default ojekBelanja;
