const setDeepProperty = (obj, path, value) => {
  const keys = path.split(".");
  let tempObj = obj;
  keys.slice(0, -1).forEach((key) => {
    if (!tempObj[key]) {
      tempObj[key] = {};
    }
    tempObj = tempObj[key];
  });
  tempObj[keys[keys.length - 1]] = value;
};
