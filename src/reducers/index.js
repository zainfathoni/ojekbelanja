import { combineReducers } from "redux";
import order from "./order";
import cost from "./cost";

const ojekbelanja = combineReducers({
  order,
  cost
});

export default ojekbelanja;
