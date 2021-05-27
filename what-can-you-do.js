const prompt = require("prompt-sync")();

const age = prompt("How old are you (in years)? ");

const ageNumber = Number(age);

console.log("User is", ageNumber, "years old.");

if (ageNumber >= 25) {
	console.log("You can do pretty much anything.");
} else if (ageNumber >= 18) {
	console.log("You can vote but not rent a car.");
} else if (ageNumber >= 16) {
	console.log("You can drive but not vote.");
} else {
	console.log("You can't drive.");
}
