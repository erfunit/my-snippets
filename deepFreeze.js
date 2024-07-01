const deepFreeze = (obj) => {
  Object.keys(obj).forEach((name) => {
    const value = obj[name];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
};
