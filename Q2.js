var num1;
var num2;

function addNum(num1,mum2){
  let sum = num1+mum2;
  return sum;
}
function multiNum(num1,num2){
  let multi = num1*num2;
  return multi;
}
function subtractNum(num1,num2){
  let subtract = num1-num2;
  return subtract;
}
function divideNum(num1,num2){
  let divide = num1/num2;
  return divide;
}

document.getElementById("Q2a").innerHTML=(addNum(5,6));
document.getElementById("Q2b").innerHTML=(multiNum(5,6));
document.getElementById("Q2c").innerHTML=(subtractNum(8,6));
document.getElementById("Q2d").innerHTML=(divideNum(8,2));
