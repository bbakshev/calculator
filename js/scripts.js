//business logic
function add(number1, number2) {
  const result = number1 + number2
  //return "The addition of your numbers equals " + result;
  return number1 + "+" + number2 + "=" + result;
}

function subtract(number1, number2) {
  const result = number1 - number2
  //return "The subtraction of your numbers equals " + result;
  return number1 + "-" + number2 + "=" + result;
}

function multiply(number1, number2) {
  const result = number1 * number2
  //return "The multiplication of your numbers equals " + result;
  return number1 + "*" + number2 + "=" + result;
}

function divide(number1, number2) {
  const result = number1 / number2
  //return "The division of your numbers equals " + result;
  return number1 + "/" + number2 + "=" + result;
}


//UI
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//window.alert(add(number1, number2) + "\n" + subtract(number1, number2) + "\n" + multiply(number1, number2) + "\n" + divide(number1, number2));

window.alert(add(number1, number2) + ", " + subtract(number1, number2) + ", " + multiply(number1, number2) + ", " + divide(number1, number2));
