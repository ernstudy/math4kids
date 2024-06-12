const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const options = document.querySelectorAll(".option");

const wrongSound = new Audio("./sounds/wrong.mp3");
const correctSound = new Audio("./sounds/correct.mp3");
let answer = 0;

// functions
add();
function add() {
  const random_number1 = Math.floor(Math.random() * 100);
  const random_number2 = Math.floor(Math.random() * 100);
  answer = random_number1 + random_number2;

  number1.textContent = random_number1;
  number2.textContent = random_number2;

  option1.textContent = Math.floor(Math.random() * 100);
  option2.textContent = Math.floor(Math.random() * 100);
  option3.textContent = Math.floor(Math.random() * 100);

  options[Math.floor(Math.random() * options.length)].textContent = answer;

  options.forEach((option) => {
    option.addEventListener("click", allOptions);
  });
}

function allOptions(e) {
  if (e.target.textContent == answer) {
    correctSound.play();
    add();
  } else {
    wrongSound.play();
    e.preventDefault();
  }
}
