<<<<<<< HEAD
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;
    const action = btn.dataset.action;

    if (action === 'AC') {
      currentInput = '';
      display.innerText = '0';
    } 
    else if (action === '=') {
      try {
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
      } catch {
        display.innerText = 'Error';
      }
    } 
    else if (action === 'square') {
      try {
        currentInput = (eval(currentInput) ** 2).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = 'Error';
      }
    } 
    else if (action) {
      currentInput += action;
      display.innerText = currentInput;
    } 
    else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
=======
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;
    const action = btn.dataset.action;

    if (action === 'AC') {
      currentInput = '';
      display.innerText = '0';
    } 
    else if (action === '=') {
      try {
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
      } catch {
        display.innerText = 'Error';
      }
    } 
    else if (action === 'square') {
      try {
        currentInput = (eval(currentInput) ** 2).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = 'Error';
      }
    } 
    else if (action) {
      currentInput += action;
      display.innerText = currentInput;
    } 
    else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
>>>>>>> dd3e2d60a09832aaf76206376c3f1ec53213a516
