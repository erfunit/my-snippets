const isPalindrome = (str) => {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return sanitizedStr === sanitizedStr.split("").reverse().join("");
};
