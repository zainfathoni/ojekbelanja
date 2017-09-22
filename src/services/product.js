export const escapeFloatingPoint = value =>
  // Avoid Floating Point Problem
  Math.round(value * 100) / 100;
