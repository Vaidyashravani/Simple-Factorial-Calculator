
function calculateFactorial(method) {
    const number = parseInt(document.getElementById('inputNumber').value);
    const resultElement = document.getElementById('result');
  
    if (isNaN(number) || number < 0) {
      resultElement.textContent = "Please enter a valid positive integer.";
      return;
    }
  
    let result;
    if (method === 'iterative') {
      result = factorialIterative(number);
      resultElement.textContent = `Iterative Result: ${result}`;
    } else {
      result = factorialRecursive(number);
      resultElement.textContent = `Recursive Result: ${result}`;
    }
  }
  
 
  function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  
  function factorialRecursive(n) {
    if (n === 0) return 1;
    return n * factorialRecursive(n - 1);
  }
  