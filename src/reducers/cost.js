import SET_COST from "../actions";

const cost = (state = 0, action) => {
  switch (action.type) {
    case SET_COST:
      return action.cost
    default:
      return state;
  }
}

export default cost;
