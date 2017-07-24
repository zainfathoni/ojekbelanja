import {
  ORDER_PLUS,
  ORDER_MINUS
} from "../actions";

const order = (state = [], action) => {
  switch (action.type) {
    case ORDER_PLUS:
      const newOrder = state;
      if (newOrder[action.id]) {
        newOrder[action.id]++;
      } else {
        newOrder[action.id] = 1;
      }
      return newOrder;
    case ORDER_PLUS:
      const newOrder = state;
      if (newOrder[action.id] > 1) {
        newOrder[action.id]--;
      } else {
        delete newOrder[action.id];
      }
      return newOrder;
    default:
      return state;
  }
}
