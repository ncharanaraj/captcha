const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector(".input-area input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-text");

let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomCharacter =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`;
  }
}

getCaptcha();

reloadBtn.addEventListener("click", () => {
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let inputVal = inputField.value.split("").join(" ");
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = "#06c59c";
    statusTxt.innerText = "Nice!, captcha matched sucessfully.";
    setTimeout(() => {
      removeContent();
      getCaptcha();
    }, 2000);
  } else {
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
  }
});

function removeContent() {
  inputField.value = "";
  captcha.innerText = "";
  statusTxt.style.display = "none";
}

// Dark theme

const change = document.querySelector(".theme");
const icon = document.querySelector(".icon");

change.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./Asset/Icons/sun.png";
  } else {
    icon.src = "./Asset/Icons/moon.png";
  }
});
