/*
const minysPoint = document.querySelector("#decrement");
const plusPoint = document.querySelector("#increment");
const counter = document.querySelector("#value");

let countValue = 0;

minysPoint.addEventListener("click", () => {
  if (countValue <= 0) {
    alert(`Меньше 0 не може бути`);
    return;
  }
  countValue -= 1;
  counter.textContent = countValue;
});

plusPoint.addEventListener("click", () => {
  if (countValue >= 10) {
    alert(`Більше 10 не може бути`);
    return;
  }
  countValue += 1;
  counter.textContent = countValue;
});
*/

/*
const containerDiv = document.querySelector("#color-display");

const inputColor = document.querySelector("#color-input");

const btnEl = document.querySelector("#apply-color");

let previousColor = containerDiv.style.backgroundColor || "white";

btnEl.addEventListener("click", () => {
  const chosenColor = inputColor.value;
  if (chosenColor === previousColor) {
    alert(`Будь ласка, оберіть колір`);
    return;
  }
  containerDiv.style.backgroundColor = chosenColor;
  containerDiv.style.color = previousColor;
  previousColor = chosenColor;
});
*/
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const answer = document.querySelector("#result");

function calculator() {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);

  if (isNaN(val1) || isNaN(val2)) {
    answer.textContent = "Будь ласка, введіть коректні числа!";
    return;
  }

  let sum = 0;

  const calcAdd = () => {
    sum = val1 + val2;
    answer.textContent = `Result: ${sum}`;
  };

  const calcSubtract = () => {
    sum = val1 - val2;
    answer.textContent = `Result: ${sum}`;
  };

  const calcMultiply = () => {
    sum = val1 * val2;
    answer.textContent = `Result: ${sum}`;
  };

  const calcDivide = () => {
    if (val2 === 0) {
      answer.textContent = "Cannot divide by zero!";
    } else {
      sum = val1 / val2;
      answer.textContent = `Result: ${sum}`;
    }
  };

  btnAdd.addEventListener("click", calcAdd);
  btnSubtract.addEventListener("click", calcSubtract);
  btnMultiply.addEventListener("click", calcMultiply);
  btnDivide.addEventListener("click", calcDivide);
}

calculator();
