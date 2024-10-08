const monthsBetween = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth())
  );
};
