let yourName = prompt('Please enter your name.');

let num1 = parseInt(prompt('Give us your first number.'));
// do {
//     num1 = prompt('Please give us a NUMBER...');
// } while(isNaN(num1) !== 'number');
alert(typeof(num1))
let num2 = prompt('Give us your second number.');

let num3 = prompt('Give us your third number.');

alert(`Thank you ${yourName}. Your combination is ${num1}-${num2}-${num3}.`);

let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);

alert(`The sum of your numbers is ${sum}`);

