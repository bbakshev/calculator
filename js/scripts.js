//business logic
function add(number1,number2) {
  return number1 + number2;
}
//UI
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));

