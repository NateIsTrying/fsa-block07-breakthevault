// establish variables for later use.
let num1;
let num2;
let num3;

// request name from user.
let yourName = prompt('Please enter your name.');

// do while loop used to make sure num1 is a number before leaving, when num1 is a string, it keeps on going. This was repeated with num2 & num3.
do {
    num1 = parseInt(prompt('Give us your first number.'));
} while(isNaN(num1));

do {
    num2 = parseInt(prompt('Give us your second number.'));
} while(isNaN(num2));

do {
    num3 = parseInt(prompt('Give us your third number.'));
} while(isNaN(num3));

// Done with backticks for cleaner code.
alert(`Thank you ${yourName}. Your combination is ${num1} - ${num2} - ${num3}.`);

//Each number is parseInt'd before adding because they are strings prior to parseInt and then transformed.
let sum = parseInt(num1) + parseInt(num2) + parseInt(num3);

// the result of 'sum'
alert(`The sum of your numbers is ${sum}`);

