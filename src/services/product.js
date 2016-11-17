export const escapeFloatingPoint = (value) =>
  // Avoid Floating Point Problem
  Math.round(value * 100) / 100;

export const quantify = (count, step, unit) => {
  const steps = escapeFloatingPoint(count * step);
  return (steps < 1 && unit === "kg") ?
    `${steps * 1000} gram`
    :
    `${steps} ${unit}`;
}

export const subtotal = (count, step, price) =>
  `Rp ${(count * step * price).toLocaleString('id')}`;

export const total = (order, products) =>
  Object.keys(order)
    .reduce(
    (sum, key) =>
      sum + (products[key].price * products[key].step * order[key])
    ,
    0
    );
