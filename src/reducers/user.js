import {
  USER_SET,
  USER_LOAD,
  USER_CLEAR
} from "../actions";

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_SET:
      return { ...state, [action.field]: action.value };
    case USER_LOAD:
      return action.user ? action.user : {};
    case USER_CLEAR:
      return {};
    default:
      return state;
  }
}

export default user;
