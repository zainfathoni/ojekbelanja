import { SET_USER, CLEAR_USER } from "../actions";

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, [action.field]: action.value };
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default user;

export const isValid = (state, field) => {
  const value = state[field];
  console.log(value);
  switch (field) {
    case "email":
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    case "phone":
      return /^0[0-9]{9,11}$/.test(value);
    case "password":
      return /^.{6,}$/.test(value);
    default:
      return true;
  }
};
