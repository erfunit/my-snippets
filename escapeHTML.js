const escapeHTML = (str) => {
  return str.replace(/[&<>"']/g, (match) => {
    const escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return escape[match];
  });
};
