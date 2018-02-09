// Assignment #5 - Choose your own adventure
// created by Raquel Mangual

// display the intro to the story
console.log('Today we play a game of Choose Your Own Adventure!');

// prompt the user for story details
let name = prompt('What is your name?');
let hood = prompt('Enter the name of a sketchy Philly neighborhood:');
let ride = prompt('Enter your favorite mode of transportation other than Septa:');

// create object containing user's answers
let user = {
	uName: name,
	uHood: hood,
	uRide: ride
};

// create an array to store user's story choices
let storyChoice = [];

// start the story
console.log('Hello ' + user.uName + ' of ' + user.uHood + ' haha');
console.log('Instead of getting to work in Center City by ' + user.uRide + ' you decided to take the El.');
console.log('You get to work only to find out today is a bonus paid day off.');
console.log('So you\'re going to start your adventure on the El, and you have to decide in which direction to travel.');

// present first choice question to user
let direction = prompt('Enter east or west: ').toLowerCase();
// validate user input
while (direction !== 'east' && direction !== 'west') {
	direction = prompt('Invalid input, please enter east or west').toLowerCase();
}
// add user's answer to the array
storyChoice.push(direction);
if (direction === 'east') {
	console.log('You decided to travel ' + storyChoice[0]);
	console.log('You get off at the Church street stop.');
	console.log('Do you walk to the next destination, or be naughty and steal a bike to get there faster?');
	// present first choice question under east option
	let howToTravel = prompt('Enter walk or steal: ');
	// validate user input
	while (howToTravel !== 'walk' && howToTravel !== 'steal') {
	howToTravel = prompt('Invalid input, please enter walk or steal').toLowerCase();
	}
	storyChoice.push(howToTravel);
	if (howToTravel === 'walk') {
		console.log('You chose to be an honest citizen and ' + storyChoice[1]);
		console.log('Now you get to undo all those calories you just burned.');
		console.log('You walk past a bakery and you have to choose one item.');
		// present second choice question under east option
		let whatToEat = prompt('Enter donut or bagel:');
		// validate user input
		while (whatToEat !== 'donut' && whatToEat !== 'bagel') {
		whatToEat = prompt('Invalid input, please enter donut or bagel').toLowerCase();
		}
		storyChoice.push(whatToEat);
		if (whatToEat === 'donut') {
			console.log('Enjoy your sweet ' + storyChoice[2] + '!');
		} else {
			console.log('Enjoy your savory ' + storyChoice[2] + '!');
		}
	}  else {
		console.log('You chose to be a criminal and ' + storyChoice[1]);
		console.log('Riding past a cop you get arrested.');
		console.log('Will you try to bribe the officer to let you go, or just go to jail?');
		// present third choice question under east option
		let whatToDo = prompt('Enter bribe or jail:');
		// validate user input
		while (whatToDo !== 'bribe' && whatToDo !== 'jail') {
		whatToDo = prompt('Invalid input, please enter bribe or jail').toLowerCase();
		}
		storyChoice.push(whatToDo);
		if (whatToDo === 'bribe') {
			console.log('The officer doesn\'t appreciate your attempt to ' + storyChoice[2] + ' so you get additional charges!');
		} else {
			console.log('The officer appreciates your humble attitude. You\'re taken to the ' + storyChoice[2] + ' but your charges are dropped and you\'re set free!');
		}
	}
} else {
	console.log('You decided to travel ' + storyChoice[0]);
	console.log('You get off at the 52nd street stop.');
	console.log('Do you walk to the next destination, or be naughty and steal a car to get there faster?');
	// present first choice question under west option
	let howToTravel = prompt('Enter walk or drive: ');
	// validate user input
	while (howToTravel !== 'walk' && howToTravel !== 'drive') {
	howToTravel = prompt('Invalid input, please enter walk or drive').toLowerCase();
	}
	storyChoice.push(howToTravel);
	if (howToTravel === 'walk') {
		console.log('You chose to be an honest citizen and ' + storyChoice[1]);
		console.log('Now you get to undo all those calories you just burned.');
		console.log('You walk past a Dunkin Donuts and you need to choose a treat.');
		// present second choice question under west option
		let whatToEat = prompt('Enter muffin or coffee:');
		// validate user input
		while (whatToEat !== 'muffin' && whatToEat !== 'coffee') {
		whatToEat = prompt('Invalid input, please enter muffin or coffee').toLowerCase();
		}
		storyChoice.push(whatToEat);
		if (whatToEat === 'muffin') {
			console.log('Enjoy your sweet ' + storyChoice[2] + '!');
		} else {
			console.log('Enjoy your overly sweet ' + storyChoice[2] + '!');
		}
	}  else {
		console.log('You chose to be a criminal and ' + storyChoice[1]);
		console.log('Driving past a cop you are spotted and get arrested.');
		console.log('Will you try to bribe the detective to let you go, or just go to jail?');
		// present third choice question under west option
		let whatToDo = prompt('Enter bribe or jail:');
		// validate user input
		while (whatToDo !== 'bribe' && whatToDo !== 'jail') {
		whatToDo = prompt('Invalid input, please enter bribe or jail').toLowerCase();
		}
		storyChoice.push(whatToDo);
		if (whatToDo === 'bribe') {
			console.log('The officer doesn\'t appreciate your attempt to ' + storyChoice[2] + ' so you get additional charges!');
		} else {
			console.log('The officer appreciates your humble attitude. You\'re taken to the ' + storyChoice[2] + ' but your charges are dropped and you\'re set free!');
		}
	}
}