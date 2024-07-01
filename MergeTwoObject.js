const mergeObjects = (...objects) => {
  let obj = {};
  objects.forEach((item) => {
    obj = { ...obj, ...item };
  });
  return obj;
};
