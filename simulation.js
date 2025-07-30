// GLOBAL FORCE VARIABLES
let speed = 0;        // Float
let friction = 0;     // Float
let tailwind = 0;     // Float
let air = 0;          // Float
let velocity = 0;     // Float
let position = 0;     // Float
let isRunning = false; // Boolean

// This Loads the car image
const carImage = new Image();
carImage.src = "car.png"; 
carImage.onload = () => {
  console.log("Car image loaded!");
  drawCar(); // This Draws the cars image using the png image i put
};

<img src="road.jpg">
let canvas = document.getElementById("simCanvas");
let ctx = canvas.getContext("2d");

background.onload = function() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   drawCar(); // This makes us draw the car on top of the background image
};


function drawCar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // This clears the cars position and redraws it to its starting position 
  ctx.drawImage(carImage, position, 150, 250, 120); 
}


function resetSim() {
  isRunning = false;     // This stops the animation loop and resets the position of the car, then it draws the car to position 0 which is its starting spot
  position = 0;          
  drawCar();             
}


function startSim() {
  // This takes the user input from GUI sliders and converts it into floats
  speed = parseFloat(document.getElementById("speedSlider").value);
  friction = parseFloat(document.getElementById("frictionSlider").value);
  tailwind = parseFloat(document.getElementById("tailwindSlider").value);
  air = parseFloat(document.getElementById("airSlider").value);

  velocity = calculateNetVelocity(); // Calculate net velocity

  // Selection control: The car should only move if the veloity is greater than zero else it should not move
  if (velocity > 0) {
    isRunning = true;
    animate(); // Begin animation loop
  } else {
    alert("The car will not move since the net velocity is zero due to the opposing forces.");
  }
}

 // this function uses arithmetic operators [(speed + tailwind) - (friction + air)] to calculate the cars velocity
function calculateNetVelocity() {
  return (speed + tailwind) - (friction + air);
}


function animate() {
  if (isRunning) { // Selection control: this means that the condition should only run if the car is moving 
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous position
    ctx.drawImage(carImage, position, 150, 250, 120); 
    position += velocity; 
    requestAnimationFrame(animate); 
  }
}
