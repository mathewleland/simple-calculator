let currentNumber = '';
const operators = ["+", "-", "*", "/"];
let lastChar;

let numbers = document.getElementsByClassName('number');
for (let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener('click', function() { //cannot use arrow function here or this will inherit window as 'this'
      currentNumber += this.innerHTML;
      updateDisplay(currentNumber);
  })
}

function updateDisplay(msg) {
  if (msg.toString().length < 9) {
    document.getElementById('display').innerHTML = msg;
  }
  else if (msg > 11111111){
    document.getElementById('display').innerHTML = "error"
  }
  else {
    document.getElementById('display').innerHTML = msg.toString().substring(0,8);
  }

}

document.getElementById("add").addEventListener('click', () => {
  lastChar = document.getElementById('display').innerHTML;
  lastChar = lastChar[lastChar.length-1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += "+";
    updateDisplay(currentNumber);
  }
  else {
    currentNumber = currentNumber.substring(0, currentNumber.length-1);
    currentNumber += "+";
    updateDisplay(currentNumber);
  }
});

document.getElementById("subtract").addEventListener('click', () => {
  lastChar = document.getElementById('display').innerHTML;
  lastChar = lastChar[lastChar.length-1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += "-";
    updateDisplay(currentNumber);
  }
  else {
    currentNumber = currentNumber.substring(0, currentNumber.length-1);
    currentNumber += "-";
    updateDisplay(currentNumber);
  }
});

document.getElementById("multiply").addEventListener('click', () => {
  lastChar = document.getElementById('display').innerHTML;
  lastChar = lastChar[lastChar.length-1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += "*";
    updateDisplay(currentNumber);
  }
  else {
    currentNumber = currentNumber.substring(0, currentNumber.length-1);
    currentNumber += "*";
    updateDisplay(currentNumber);
  }
});

document.getElementById("divide").addEventListener('click', () => {
  lastChar = document.getElementById('display').innerHTML;
  lastChar = lastChar[lastChar.length-1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += "/";
    updateDisplay(currentNumber);
  }
  else {
    currentNumber = currentNumber.substring(0, currentNumber.length-1);
    currentNumber += "/";
    updateDisplay(currentNumber);
  }
});


document.getElementById("equals").addEventListener('click', () => {
  if (typeof eval(currentNumber) == 'number') {
    currentNumber = eval(currentNumber);
    updateDisplay(currentNumber);
  } else updateDisplay("error");
});

document.getElementById("clear").addEventListener('click', () => {
  currentNumber = '';
  updateDisplay(currentNumber);
});
