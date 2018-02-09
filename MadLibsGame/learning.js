// my second javascript file
// Assignment #3 - Mad Libs
// created by Raquel Mangual

// display the intro to the story
console.log('Today we play: How many Trumps does it take to...');
console.log('But first I need some input from you.');

// prompt the user for the fill-in parts of the story
let job1 = (prompt('Enter a job title for a top position at the White House: '));
let num1 = Number(prompt('Enter a number: '));

let job2 = (prompt('Enter a job title for a top position at the Pentagon: '));
let num2 = Number(prompt('Enter a number: '));

let job3 = (prompt('Enter a title for a family member (such as wife, son-in-law, etc.): '));
let num3 = Number(prompt('Enter a number: '));

// perform some calculations on the numbers provided
num1 = num1 + 1; 
num2 = Math.pow(num3,2);
num3 = num2 - num1;

// display the Madlibs story
console.log('It will take at least ' + num3 + ' Trumps to find a suitable Pentagon ' + job2 + '.');
console.log('It will take at least ' + num1 + ' Trumps to find a suitable ' + job3 + '.');
console.log('It will take at least ' + num2 + ' Trumps to find a suitable White House ' + job1 + '.');
