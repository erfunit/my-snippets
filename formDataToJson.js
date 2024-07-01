const formDataToJson = (formData) => {
  const json = {};
  formData.forEach((value, key) => {
    json[key] = value;
  });
  return JSON.stringify(json);
};
