const toCamelCase = (str) => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
};
