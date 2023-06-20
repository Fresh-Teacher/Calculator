let display = document.getElementById('display');
let currentExpression = '';

function appendCharacter(character) {
  currentExpression += character;
  display.value = currentExpression;
}

function calculate() {
  try {
    let result = eval(currentExpression);
    display.value = result;
    currentExpression = result;
  } catch (error) {
    display.value = 'Error';
    currentExpression = '';
  }
}

function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function clearAll() {
  clearDisplay();
}

function changeSign() {
  if (currentExpression !== '') {
    if (currentExpression[0] === '-') {
      currentExpression = currentExpression.slice(1);
    } else {
      currentExpression = '-' + currentExpression;
    }
    display.value = currentExpression;
  }
}

// Implement the rest of the calculator's functions and buttons as needed
