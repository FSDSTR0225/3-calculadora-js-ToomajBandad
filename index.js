const displayElem = document.getElementById("display");

function concatItemToDisplay(value) {
  displayElem.value += value;
}

function clearDisplay() {
  displayElem.value = "";
}

function calculate() {
  if (displayElem.value) {
    displayElem.value = eval(displayElem.value);
  } else {
    console.log("error");
  }
  // try {
  //   displayElem.value = eval(display.value);
  // } catch (error) {
  //   displayElem.value = "Error";
  // }
}
