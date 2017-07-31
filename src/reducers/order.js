import {
  INC_ORDER,
  DEC_ORDER,
  SET_ORDER,
  REMOVE_ORDER,
  CLEAN_ORDER,
  CLEAR_ORDER
} from '../actions';

const order = (state = {}, action) => {
  const { id } = action
  const count = state[action.id];
  switch (action.type) {
    case INC_ORDER:
      if (count) {
        return { ...state, [id]: count + 1 };
      } else {
        return { ...state, [id]: 1 };
      }
    case DEC_ORDER:
      if (count > 1) {
        return { ...state, [id]: count - 1 };
      } else {
        let newState = { ...state };
        delete newState[id];
        return newState; 
      }
    case SET_ORDER:
      return { ...state, [id]: action.count };
    case REMOVE_ORDER:
      let newState = { ...state };
      delete newState[id];
      return newState; 
    case CLEAN_ORDER:
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
    case CLEAR_ORDER:
      return {};
    default:
      return state;
  }
}

export default order;

export const getOrder =  (state) => state;
