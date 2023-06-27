// Combo: 10 - 40 - 39

// Assign 3 variables; decided to make them build each successive variable.
// multiply arithmetic operator
let comb1 = 5 * 2;
// used comb1 multiplied by 4 to equal '40'
let comb2 = 4 * comb1;
// comb3 was made by using comb2 and subtracting 1 for the third combination.
let comb3 = comb2 - 1;

//create message, message taken from the requirements;
let message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ';

// create a dialogue box displaying the vault codes and the text using the HTML tags and the string.
// this was done with back ticks for cleaner user experience.
alert(message +`${comb1} - ${comb2} - ${comb3}`);

