const roundToDecimal = (num, decimalPlaces) => {
  return Number(Math.round(num + "e" + decimalPlaces) + "e-" + decimalPlaces);
};
