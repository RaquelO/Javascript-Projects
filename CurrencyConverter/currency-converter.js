// Assignment #6 - Currency Converter
// created by Raquel Mangual

'use strict';

// let user know what the program does and what currencies it works with
console.log('This converter works with the following currencies:');
console.log('USD, EUR, GBP, JPY and BRL');
// ask user which currency they want to convert from and to, and how much is being converted
let moneyNow = prompt('Enter how much money you have');
let currNow = prompt('Enter the currency your money is in');
let currLater = prompt('Enter the currency you wish to convert to');
if (currNow === 'USD') {
	let moneyLater = dollarsToForeign(moneyNow, currLater);// convert from USD to other currencies
	outputConversion(moneyNow, currNow, moneyLater, currLater);
} else if (currNow !== 'USD' && currLater === 'USD'){
	let moneyLater = foreignToDollars(moneyNow, currNow);// convert from other currencies to USD
	outputConversion(moneyNow, currNow, moneyLater, currLater);
} else {
	let moneyA = foreignToDollars(moneyNow, currNow);// convert between foreign currencies, first step
	let moneyLater = dollarsToForeign(moneyA, currLater);//  convert between foreign currencies, second step
	outputConversion(moneyNow, currNow, moneyLater, currLater);
}

// function that converts currency from USD to other currencies
function dollarsToForeign(amt, currLater) {
	if (currLater === 'EUR') {
		return amt * 0.91;
	} else if (currLater === 'JPY') {
		return amt * 124.17;
	} else if (currLater === 'GBP') {
		return amt * 0.65;
	} else if (currLater === 'BRL') {
		return amt * 3.51;
	} else {
		return amt * 1;
	}
}

// function that converts currency to USD from other currencies
function foreignToDollars(amt, currNow) {
	if (currNow === 'EUR') {
		return amt / 0.91;
	} else if (currNow === 'JPY') {
		return amt / 124.17;
	} else if (currNow === 'GBP') {
		return amt / 0.65;
	} else if (currNow === 'BRL') {
		return amt / 3.51;
	} else {
		return amt / 1;
	}
}

// function that outputs details of the currency conversion to the console
function outputConversion(amt, currNow, moneyLater, currLater) {
	return console.log(moneyNow + ' in ' + currNow + ' converts to ' + (moneyLater.toFixed(2)) + ' in ' + currLater);
}