let num1 = 10;
let operation = "*";
let num2 = 5;

function add(x, y){
  return x+y;
}

function subtract(x, y){
  return x-y;
}

function multiply(x, y){
  return x*y;
}

function divide(x, y){
  return x/y;
}

function operate(num1, operation, num2){
  if (operation == "+"){
    const answer = add(num1, num2);
    console.log(answer);
  }
  else if (operation == "-"){
    const answer = subtract(num1, num2);
    console.log(answer);
  }
  else if (operation == "*"){
    const answer = multiply(num1, num2);
    console.log(answer);
  }
  else if (operation == "/"){
    const answer = divide(num1, num2);
    console.log(answer);
  }
}

operate(num1, operation, num2);
