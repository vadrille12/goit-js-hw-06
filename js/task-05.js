const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.input.value.length > 0) {
    refs.output.textContent = event.currentTarget.value;
  } else {
      refs.output.textContent = "Anonymous";
  }
}
