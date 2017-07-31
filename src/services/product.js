export const escapeFloatingPoint = (value) =>
  // Avoid Floating Point Problem
  Math.round(value * 100) / 100;

export const total = (order, products) =>
  Object.keys(order)
    .reduce(
    (sum, key) =>
      sum + (products[key].price * products[key].step * order[key])
    ,
    0
    );
