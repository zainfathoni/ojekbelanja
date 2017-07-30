import {
  SET_USER,
  CLEAR_USER
} from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, [action.field]: action.value };
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
}

export default user;
