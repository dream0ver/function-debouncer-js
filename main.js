(() => {
  const inputBox = document.querySelector("#input-box");
  const deferText = document.querySelector("#defer-text");

  const debounce = (callback, delay = 1000) => {
    let timeout;
    return (...args) => {
      {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          callback(...args);
        }, delay);
      }
    };
  };

  const handleInput = (e) => {
    deferText.textContent = e.target.value;
  };

  const debouncedHandleInput = debounce(handleInput);
  inputBox.addEventListener("input", debouncedHandleInput);
})();
