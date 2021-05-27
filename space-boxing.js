const prompt = require("prompt-sync")();

const weight = prompt("What is your current weight? ");
const planet = prompt(
	"Enter a number for the planet you want to fight on (1-6): "
);

const weightNum = Number(weight);
const planetNum = Number(planet);

const planet1 = 0.78;
const planet2 = 0.39;
const planet3 = 2.65;
const planet4 = 1.17;
const planet5 = 1.05;
const planet6 = 1.23;

if (planetNum === 1) {
	console.log("On Venus you would weigh :", weightNum * planet1, "lbs.");
} else if (planetNum === 2) {
	console.log("On Mars you would weigh :", weightNum * planet2, "lbs.");
} else if (planetNum === 3) {
	console.log("On Jupiter you would weigh :", weightNum * planet3, "lbs.");
} else if (planetNum === 4) {
	console.log("On Saturn you would weigh :", weightNum * planet4, "lbs.");
} else if (planetNum === 5) {
	console.log("On Uranus you would weigh :", weightNum * planet5, "lbs.");
} else if (planetNum === 6) {
	console.log("On Neptune you would weigh :", weightNum * planet6, "lbs.");
} else {
	console.log("Error, must input in the proper range");
}
