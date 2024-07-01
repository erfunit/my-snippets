const input = document.querySelector("input");
const debounceText = document.getElementById("debounce");

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 700);

input.addEventListener("input", ({ target: { value } }) => {
  updateDebounceText(value);
});

const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
