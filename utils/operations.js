export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((result, num, index) => {
      if (index === 0) return num;
      return result - num;
  }, 0);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  return numbers.reduce((result, num, index) => {
      if (index === 0) return num;
      if (num === 0) {
          console.log("Error: Division by zero is not allowed");
          return NaN;
      }
      return result / num;
  }, 1);
}

