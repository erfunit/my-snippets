const formDataToUrlSearchParams = (formData) => {
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    params.append(key, value);
  });
  return params;
};
