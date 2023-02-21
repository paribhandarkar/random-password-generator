const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyiconEl = document.querySelector(".fa-clone");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  generatePassword();
});

copyiconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function generatePassword() {
  let password = "";
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    const randomCharacter = chars.substring(randomNum, randomNum + 1);
    password = password + randomCharacter;
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + ' Copied!'
}

function copyPassword() {
  inputEl.select();
  navigator.clipboard.writeText(inputEl.value);
}
