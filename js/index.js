'use strict';

let operator = prompt("Enter operator (+, -, *, /)")
let x = parseInt(prompt("Enter the first number"));
let y = parseInt(prompt("Enter the second number"));

let result = 0;
if(isNaN(x) || isNaN(y)){
    alert("Wrong input! Please, refresh the page and enter data");
}else{

    if(operator === '+'){
        result = x + y;
    }else if (operator === '-'){
        result = x - y;
    }else if (operator === '*'){
        result = x * y;
    }else if (operator === '/'){
        result = x / y;
    }
    alert(x + operator + y + '=' + result);
}