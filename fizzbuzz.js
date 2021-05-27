const prompt = require("prompt-sync")();

const question = prompt("Please input a number: ");
const number = Number(question);

// If number is divisible by 3 and 5 log "fizzbuzz"
if (number % 3 === 0 && number % 5 === 0) {
	console.log("fizzbuzz");
}
// If number is divisible by 3 log "fizz"
else if (number % 3 === 0) {
	console.log("fizz");
}
// If number is divisible by 5 log "buzz"
else if (number % 5 === 0) {
	console.log("buzz");
}
// If number is not divisible by 3 or 5 log an Error
else {
	console.log("Does not Compute!");
}
