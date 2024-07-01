const formatDate = (date, format = "YYYY-MM-DD") => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate.split("/").join("-");
};
