const display1 = document.querySelector('.outputContainer :nth-child(1)');
const display2 = document.querySelector('.outputContainer :nth-child(2)');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equalSign = document.querySelector('.equalSign');
const clearSign = document.querySelector('.clearSign');


let num2 = '';
let containZero = true;
let containDot = true;
let containNegativeSign = true;
numbers.forEach(number => {
  number.addEventListener('click', e => {
  
    
    if(display2.innerText.length <= 15){
      if(e.target.innerText == '0' && containZero){
        containZero = false;
      }else if(e.target.innerText == '0' && !containZero){
       return;
      }

      if(e.target.innerText == '.' && containDot){
       if(!num2){
         display2.textContent = '0' + num2;
         containDot = false;
       }
      else if(num2){
        containDot = false;
      }

      }else if(e.target.innerText == '.' && !containDot){
        
        return;
      }
      if(e.target.innerText === '+/-' && containNegativeSign){
        if(num2 && num2 != '0' && num2 != '.'){
          if(num2.startsWith('.')){
          display2.textContent = '-' + '0' + num2
          num2 = (-1 * num2)
        
          containNegativeSign = false;
          }else{
            display2.textContent = '-' + num2
            num2 = (-1 * num2)
          
            containNegativeSign = false;

          }
         
        }if(!num2 && num2 != '0' && num2 != '.'){
        display2.textContent += '-';
        num2 += '-';
        containNegativeSign = false;
        }
      
      }else if(e.target.innerText === '+/-' && !containNegativeSign){
       return;
      }
    
      else{
      display2.textContent += e.target.innerText;
      num2 += e.target.innerText
    
      if(num2 == '0'){
        containZero = false;
      }else if(num2 != '0'){
        containZero = true;
      }
      }
      }
      
    else{
        const text = document.querySelector('.outputContainer :nth-child(3)');
        text.classList.remove('hidden')
        setTimeout(function(){
          text.classList.add('hidden')
        },1500)
      }
  })

})

let num1 = '';
let containNum1 = true;
let operatorSign = '';

operations.forEach(operation => {
  operation.addEventListener('click', e => {
    if(!num2 || num2 == "-" || num2 == '.' ) return;
   
    equal()
    if( containNum1){
    containNegativeSign = true;
  containDot = true;
    
    operatorSign = e.target.innerText;
    display1.textContent += display2.innerText + ' ' + operatorSign + '';
    display2.textContent = ''
    num1 = num2;
    num2 = ''
  containNum1 = false}
  else if(!containNum1){
    return;
  }
  })
})

let results = '';
function calc(operator,num1,num2){
  if( num2 == '-' || num2 == '.'){
    alert('additional number is missing')
    results = num1;
  }
  else if(num2 != '-'){
  if(operator == '+'){
    results = Number(num1) + Number(num2);}
  else if ( operator == '-'){
    results = Number(num1) - Number(num2);}
  else if( operator == '÷' && num2 == 0){
    alert('You cannot divide by zero');
    results = num1;
   }
  else if(operator == '÷'){
    results = Number(num1) / Number(num2);}
  else if( operator == '×'){
  results = Number(num1) * Number(num2)};}
  
}

function equal(){
  if(!num1){
    return}
    containNum1 = true;
  calc(operatorSign,num1,num2)
  
  let numToStr = results.toString();
  if(numToStr.length > 9 && numToStr.includes('.')){
    let strToNum = Number(numToStr)
    let fixDecimal = strToNum.toFixed(10)
    display2.textContent = fixDecimal;
    num2 = Number(strToNum.toPrecision(15));
  }else if(numToStr.length > 15){
    let strToNum = Number(numToStr)
    display2.textContent = strToNum.toPrecision(15);
    num2 = Number(strToNum.toPrecision(15));
  }else{
    let strToNum = Number(numToStr)
    display2.textContent = strToNum;
    num2 = Number(strToNum.toPrecision(15));
  }
  if(results.toString().includes('.')){
    containDot = false;
  }

  display1.textContent = ''
  num1 = ''

}

equalSign.addEventListener('click',equal)

function clearAll(){
  num1 = '';
  num2 =  '';
  operatorSign = '';
  display1.textContent = '';
  display2.textContent = '';
  containZero = true;
  containDot = true;
  containNegativeSign = true;
  containNum1 = true;
}
document.querySelector('.clearSign').addEventListener('click',clearAll)

function removeLastDigit(){
  containZero = true;
  containDot = true;
  containNegativeSign = true;
  let lastDigitRemoved = display2.innerText.slice(0,display2.innerText.length -1)
  num2 = display2.innerText.slice(0,display2.innerText.length -1)
   return display2.textContent = lastDigitRemoved;
   
}
document.querySelector('.cancel').addEventListener('click',removeLastDigit);

function pressKey(key){
 if(display2.innerText.length <= 15){
  if(key.key == '0'){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '1'){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '2' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '3'){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '4' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '5' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '6' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '7' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '8' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '9' ){
    display2.textContent += key.key;
    num2 += key.key;
  }
  if(key.key == '.' && containDot ){
    display2.textContent += key.key;
    num2 += key.key;
    containDot = false;
  }
  if(key.key == '.' && !containDot ){
    return;
   
  }
}
  if(key.key == 'Enter'){
   equal();
  }
  if(key.key == 'Delete'){
   clearAll();
  }
  if(key.key == '-'){
  displayOperator('-')
  }
  if(key.key == '+' ){
  displayOperator('+')
  }
  if(key.key == '/' ){
  displayOperator('÷')
  }
  if(key.key == '*' ){
  displayOperator('×')
  }
  if(key.key == 'Backspace'){
    removeLastDigit()
  }
  if(display2.innerText.length > 15 ){
    const text = document.querySelector('.outputContainer :nth-child(3)');
    text.classList.remove('hidden')
    setTimeout(function(){
      text.classList.add('hidden')
    },1500)
  }
}
window.addEventListener('keydown',pressKey)

function displayOperator(mathSign){
  if(!num2 || num2 == "-" ) return;
   
  equal()
  if( containNum1){
  containNegativeSign = true;
containDot = true;
  
  operatorSign = mathSign;
  display1.textContent += display2.innerText + ' ' + operatorSign + '';
  display2.textContent = ''
  num1 = num2;
  num2 = ''
containNum1 = false}
else if(!containNum1){
  return;
}
}