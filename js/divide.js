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
divide();
function divide() {
  const random_number1 = Math.floor(Math.random() * 10);
  const random_number2 = Math.floor(Math.random() * 10);
  if (random_number1 < random_number2 || random_number2 == 0) {
    return divide();
  }
  let dividedNmuber = random_number1 / random_number2;
  let formatedNumber = dividedNmuber.toFixed(1);

  if (Number.isInteger(dividedNmuber)) {
    answer = dividedNmuber;
  } else {
    answer = formatedNumber;
  }

  number1.textContent = random_number1;
  number2.textContent = random_number2;

  option1.textContent = Math.floor(Math.random() * 10);
  option2.textContent = Math.floor(Math.random() * 10);
  option3.textContent = Math.floor(Math.random() * 10);

  options[Math.floor(Math.random() * options.length)].textContent = answer;

  options.forEach((option) => {
    option.addEventListener("click", allOptions);
  });
}

function allOptions(e) {
  if (e.target.textContent == answer) {
    correctSound.play();
    divide();
  } else {
    wrongSound.play();
    e.preventDefault();
  }
}
