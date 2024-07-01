const appendArrayToFormData = (formData, key, array) => {
  array.forEach((value, index) => {
    formData.append(`${key}[${index}]`, value);
  });
};
