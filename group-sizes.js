const prompt = require("prompt-sync")();

const classSize = prompt("How big is the class? ");
const classSizeNum = Number(classSize);

const groups = classSizeNum / 3;
const groupLeft = classSizeNum % 3;
const groupLeftNum = groupLeft / 2;

console.log(Math.round(groups));
console.log(groupLeft);

if (groupLeft === 2) {
	console.log("We will have", Math.round(groups - 1), "groups of 3.");
	console.log("We will have", groupLeftNum, "groups of 2.");
} else if (groupLeft === 0) {
	console.log("We will have", Math.round(groups), "groups of 3.");
} else if (groupLeft === 1) {
	console.log("We will have", Math.round(groups - 1), "groups of 3.");
	console.log("We will have", groupLeft + 1, "groups of 2.");
}
