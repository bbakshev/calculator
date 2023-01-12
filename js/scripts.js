// //business logic
// function add(number1, number2) {
//   const result = number1 + number2
//   //return "The addition of your numbers equals " + result;
//   return number1 + "+" + number2 + "=" + result;
// }

// function subtract(number1, number2) {
//   const result = number1 - number2
//   //return "The subtraction of your numbers equals " + result;
//   return number1 + "-" + number2 + "=" + result;
// }

// function multiply(number1, number2) {
//   const result = number1 * number2
//   //return "The multiplication of your numbers equals " + result;
//   return number1 + "*" + number2 + "=" + result;
// }

// function divide(number1, number2) {
//   const result = number1 / number2
//   //return "The division of your numbers equals " + result;
//   return number1 + "/" + number2 + "=" + result;
// }


// //UI
// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

// //window.alert(add(number1, number2) + "\n" + subtract(number1, number2) + "\n" + multiply(number1, number2) + "\n" + divide(number1, number2));

// window.alert(add(number1, number2) + ", " + subtract(number1, number2) + ", " + multiply(number1, number2) + ", " + divide(number1, number2));
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;

  let result;
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }

  document.getElementById("output").innerText = result;

}
window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
}
);