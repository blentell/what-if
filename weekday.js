const prompt = require("prompt-sync")();

const number = prompt("Enter a number (between 1 and 7): ");
const numberNumber = Number(number);

console.log("User inputted the number", numberNumber);

if (numberNumber === 1) {
	console.log("Today is Monday");
} else if (numberNumber === 2) {
	console.log("Today is Tuesday");
} else if (numberNumber === 3) {
	console.log("Today is Wednesday");
} else if (numberNumber === 4) {
	console.log("Today is Thursday");
} else if (numberNumber === 5) {
	console.log("Today is Friday");
} else if (numberNumber === 6) {
	console.log("Today is Saturday");
} else if (numberNumber === 7) {
	console.log("Today is Sunday");
} else {
	console.log("error");
}
