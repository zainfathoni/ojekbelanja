export function quantify(count, step, unit) {
  const steps = Math.round(count * step * 100) / 100; // Avoid Floating Point Problem
  const qty =
    (steps < 1 && unit === "kg") ?
      `${steps * 1000} gram`
      :
      `${steps} ${unit}`
  return qty;
}
