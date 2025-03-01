let stepFlag = 1;
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");

function numberPressHandler(number) {
  display3.value = display3.value + number;
}
function clearDisplayHandler() {
  console.log("clear");
  display1.value = "";
  display2.value = "";
  display3.value = "";
  stepFlag = 1;
}
function operatorPressHandler(operator) {
  if (stepFlag === 1) {
    display1.value = display3.value;
    display2.value = operator;
    display3.value = "";
    stepFlag = 2;
  } else {
    calculateHandler(operator);
  }
}
function calculateHandler(input) {
  if (input) {
    console.log("I have input");
    if (display2.value === "+") {
      display1.value = sum(display1.value, display3.value);
      display3.value = "";
    } else if (display2.value === "-") {
      display1.value = reduce(display1.value, display3.value);
      display3.value = "";
    } else if (display2.value === "/") {
      display1.value = division(display1.value, display3.value);
      display3.value = "";
    } else if (display2.value === "*") {
      display1.value = multiple(display1.value, display3.value);
      display3.value = "";
    }
    display2.value = input;
  } else {
    if (display2.value === "+") {
      display3.value = sum(display1.value, display3.value);
      display1.value = "";
    } else if (display2.value === "-") {
      display3.value = reduce(display1.value, display3.value);
      display1.value = "";
    } else if (display2.value === "/") {
      display3.value = division(display1.value, display3.value);
      display1.value = "";
    } else if (display2.value === "*") {
      display3.value = multiple(display1.value, display3.value);
      display1.value = "";
    }

    stepFlag = 1;
    display2.value = "";
  }
}

function sum(a, b) {
  return Number(a) + Number(b);
}
function reduce(a, b) {
  return Number(a) - Number(b);
}
function division(a, b) {
  return Number(a) / Number(b);
}
function multiple(a, b) {
  return Number(a) * Number(b);
}
