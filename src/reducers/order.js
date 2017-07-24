export const ORDER_PLUS = "ORDER_PLUS";
export const ORDER_MINUS = "ORDER_MINUS";

const order = (state = [], action) => {
  switch (action.type) {
    case ORDER_PLUS:
      const newOrder = state;
      if (newOrder[action.productId]) {
        newOrder[action.productId]++;
      } else {
        newOrder[action.productId] = 1;
      }
      return newOrder;
    case ORDER_PLUS:
      const newOrder = state;
      if (newOrder[productId] > 1) {
        newOrder[productId]--;
      } else {
        delete newOrder[productId];
      }
      return newOrder;
    default:
      return state;
  }
}
