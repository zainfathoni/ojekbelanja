import {
  ORDER_PLUS,
  ORDER_MINUS,
  ORDER_SET,
  ORDER_REMOVE,
  ORDER_CLEAN,
  ORDER_CLEAR
} from "../actions";

const order = (state = {}, action) => {
  const { id } = action
  const count = state[action.id];
  switch (action.type) {
    case ORDER_PLUS:
      if (count) {
        return { ...state, [id]: count + 1 };
      } else {
        return { ...state, [id]: 1 };
      }
    case ORDER_MINUS:
      if (count > 1) {
        return { ...state, [id]: count - 1 };
      } else {
        let newState = { ...state };
        delete newState[id];
        return newState; 
      }
    case ORDER_SET:
      return { ...state, [id]: action.count };
    case ORDER_REMOVE:
      let newState = { ...state };
      delete newState[id];
      return newState; 
    case ORDER_CLEAN:
      // Clean empty products from order
      return Object.keys(state)
          .filter(key =>
            action.products[key] !== undefined && !action.products[key].empty
          )
          .reduce((res, key) =>
            ({
              ...res,
              [key]: state[key],
            }),
            {}
          );
    case ORDER_CLEAR:
      return {};
    default:
      return state;
  }
}

export default order;
