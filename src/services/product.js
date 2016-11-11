export function quantify(count, step, unit) {
  const steps = escapeFloatingPoint(count * step * 100);
  const qty =
    (steps < 1 && unit === "kg") ?
      `${steps * 1000} gram`
      :
      `${steps} ${unit}`
  return qty;
}

export function escapeFloatingPoint(value) {
  // Avoid Floating Point Problem
  return Math.round(value * 100) / 100;
}
