const validationInputRef = document.querySelector("#validation-input");

function checkNumbers () {
  if (
    validationInputRef.value.length ===
    Number(validationInputRef.dataset.length)
  ) {
    validationInputRef.classList.remove(`invalid`);
    validationInputRef.classList.add(`valid`);
  } else {
    validationInputRef.classList.remove(`valid`);
    validationInputRef.classList.add(`invalid`);
  }
};

validationInputRef.addEventListener("blur", checkNumbers);
