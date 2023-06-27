let num1;
let num2;
let num3;

let yourName = prompt('Please enter your name.');

do {
    num1 = parseInt(prompt('Give us your first number.'));
} while(isNaN(num1));

do {
    num2 = parseInt(prompt('Give us your second number.'));
} while(isNaN(num2));

do {
    num3 = parseInt(prompt('Give us your third number.'));
} while(isNaN(num3));

alert(`Thank you ${yourName}. Your combination is ${num1}-${num2}-${num3}.`);

let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);

alert(`The sum of your numbers is ${sum}`);

