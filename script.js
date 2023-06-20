let display = document.getElementById('display');
let currentExpression = '';
let cursorPosition = 0;

function appendCharacter(character) {
  currentExpression = currentExpression.slice(0, cursorPosition) + character + currentExpression.slice(cursorPosition);
  cursorPosition++;
  display.value = currentExpression;
}

function calculate() {
  try {
    let result = eval(currentExpression);
    display.value = result;
    currentExpression = result;
    cursorPosition = currentExpression.length;
  } catch (error) {
    display.value = 'Error';
    currentExpression = '';
    cursorPosition = 0;
  }
}

function clearDisplay() {
  currentExpression = '';
  cursorPosition = 0;
  display.value = '';
}

function clearAll() {
  clearDisplay();
}

function deleteCharacter() {
  if (currentExpression.length > 0 && cursorPosition > 0) {
    currentExpression = currentExpression.slice(0, cursorPosition - 1) + currentExpression.slice(cursorPosition);
    cursorPosition--;
    display.value = currentExpression;
  }
}

function moveCursor(direction) {
  if (direction === 'left') {
    if (cursorPosition > 0) {
      cursorPosition--;
    }
  } else if (direction === 'right') {
    if (cursorPosition < currentExpression.length) {
      cursorPosition++;
    }
  }
}

// Update year in the footer dynamically
let yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
