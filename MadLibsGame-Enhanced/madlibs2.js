// Assignment #4 - Mad Libs Enhanced
// created by Raquel Mangual

// display the intro to the story
console.log('Today we play: What would Zach Galifianakis do?');
console.log('But first I need some input from you.');

// create an array variable to store some of the story data
let dateInfo = [];

// prompt the user for date info; request a month, day and year
let month = Number(prompt('Enter your favorite month (1-12): '));
let day = Number(prompt('Enter your favorite day of the month (1-31): '));
let year = Number(prompt('Enter your favorite year (four digits): '));

// prompt the user for additional story details
let brainy = prompt('Name a smart person you\'d party with: ');
let cocktail = prompt('Name your favorite very strong drink: ');
let someNum = prompt('Enter a number: ');

// add user input to the array
dateInfo.push(year);
dateInfo.push(month);
dateInfo.push(day);
dateInfo.push(brainy);
dateInfo.push(cocktail);
dateInfo.push(someNum);

// create Date using input provided
let storyDate = new Date(dateInfo[0],(dateInfo[1]-1),dateInfo[2]);

// create object containing more story details
let storyDetails = {
	hotel: 'Flamingo Hotel',
	person: 'Supreme Court Justice Sonia Sotomayor',
	drink2: 'Screwdriver'
};

// output the enhanced Madlibs story to the console
console.log('If you wanted to do a remake of The Hangover movie, the best day to make it would be on ' + 
            (storyDate.getMonth() + 1) + '/' + storyDate.getDate() + '/' + storyDate.getFullYear() + '.');
console.log('But this time you\'ll have an interesting costar like ' + dateInfo[3] + '.');
console.log('You can film the movie at the shady ' + storyDetails.hotel + '.');
console.log('Make sure to watch your ' + dateInfo[4] + ' drink so that ' + storyDetails.person + ' doesn\'t drop a roofie in it.');
console.log('If your drink gets contaminated, you can always order a ' + storyDetails.drink2 + ' instead.');
console.log('Otherwise Mike Tyson will have to punch Zach in the face ' + dateInfo[5] + ' more times.');
