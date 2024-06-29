// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Speed Detector function
function checkSpeed() {
    let speed = parseFloat(prompt("Enter the speed of the car: "));

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed();
