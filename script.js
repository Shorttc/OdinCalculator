let screenValue = "0";
let num1 = null;
let opr1 = null;
let num2 = null;
let opr2 = null;

//Adds value to the calculator screen
function updateScreen(){
  const screen = document.getElementById('screen');
  //Fits the string to the length of the screen
  if (screenValue.length > 20){screen.innerText = screenValue.substring(0, 20);}
  else{screen.innerText = screenValue;}
}
updateScreen();

function buttonNum(num){
  if (screenValue == "0"){
    screenValue = num.toString();
  }
  else{
    screenValue += num.toString();
  }
  updateScreen();
}

function operation(opr){
  console.log(opr);
}

function decimal(dec){
  console.log(dec);
}

function equals(eql){
  console.log(eql);
}

function clear(clr){
  screenValue = "0";
  num1 = null;
  opr1 = null;
  num2 = null;
  opr2 = null;
  updateScreen();
}

//button clicks
const buttons = document.querySelectorAll("button");
function click(){
    for (i = 0; i < buttons.length; i++){
      let b = buttons[i];
      b.addEventListener('click', function(){
        if (b.classList == "buttonNum") {
          let num = Number(b.value);
          buttonNum(num);
        }
        else if (b.classList == "buttonOpr") {
          operation(b.value);
        }
        else if (b.classList == "buttonDec") {
          decimal(b.value);
        }
        else if (b.classList == "buttonEql") {
          equals(b.value);
        }
        else if (b.classList == "clearButton"){
          clear(b.value);
        }
      });
    }
}

click();





//Does basic calculations
function calculate(num1, num2, op1){
  if (op1 == "+"){return num1 + num2;}
  else if (op1 == "-"){return num1 - num2;}
  else if (op1 == "*"){return num1 * num2;}
  else if (op1 == "/"){
    if (num2 == 0){return "error";}
    else {return num1 / num2;}
  }
}



