// GLOBAL FORCE VARIABLES
let speed = 0;        // Float
let friction = 0;   // Float
let tailwind = 0;     // Float
let air = 0;        // Float
let velocity = 0;     // Float
let position = 0;     // Float
let isRunning = false; // Boolean

// The image for the car
const carImage = new Image();
carImage.src = "car.png";
carImage.onload = () => {
  console.log("Car image loaded!");
};
/**
 * FUNCTION: startSim() — is triggered by the Start button which Calculates the velocity and other external factors based on GUI inputs.
 */
function startSim() {
  speed = parseFloat(document.getElementById("speedSlider").value);
  friction = parseFloat(document.getElementById("frictionSlider").value);
  tailwind = parseFloat(document.getElementById("tailwindSlider").value);
  air = parseFloat(document.getElementById("airSlider").value);
//this takes the users input based on the slider and makes it into a float for calculations

  velocity = calculateNetVelocity();

  if (velocity > 0) {
    isRunning = true;
    animate(); // repetition structure
  } else {
    alert("The car has stopped: net velocity is zero due to opposing forces.");

  } //this makes sure that if the velocity is greater than zero then the car should move, however if it isnt then it should stop.
}
/**
 * FUNCTION: calculateNetVelocity()
 * Uses arithmetic operators [(speed + tailwind) - (friction + air)] to determine the final velocity of the car
 */

function calculateNetVelocity() {
  return (speed + tailwind) - (friction + air);
}


/**
 * FUNCTION: animate()
 * This makes the cars image update based on its movement.
 */
function animate() {
  if (isRunning) { // boolean check to see if the car is moving (selection control)
    const canvas = document.getElementById("simCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // drawImage — replaces a rectangle with an actual car and draws the car image based on its position
    ctx.drawImage(carImage, position, 150, 200, 100);// this changes the width and height of the car.

    position += velocity;
    requestAnimationFrame(animate);
  }
}
