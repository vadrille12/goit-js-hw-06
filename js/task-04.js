let counterValue = 0;

const counterBtn = {
  increment: document.querySelector("[data-action = 'increment']"),
  decrement: document.querySelector("[data-action = 'decrement']"),
  value: document.querySelector("#value"),
};

counterBtn.increment.addEventListener("click", (onClickIncrement) => {
  counterValue += 1;
  counterBtn.value.textContent = counterValue;
});

counterBtn.decrement.addEventListener("click", (onClickDecrement) => {
  counterValue -= 1;
  counterBtn.value.textContent = counterValue;
});
