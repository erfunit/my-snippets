const input = document.querySelector("input");
const throttleText = document.getElementById("throttle");

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 700);

input.addEventListener("input", ({ target: { value } }) => {
  updateThrottleText(value);
});

const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
};
