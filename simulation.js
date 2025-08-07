// GLOBAL FORCE VARIABLES
let speed = 0;        // Float
let friction = 0;     // Float
let tailwind = 0;     // Float
let air = 0;          // Float
let velocity = 0;     // Float
let position = 0;     // Float
let isRunning = false; // Boolean

// This Loads the car image
let carImage = new Image();
carImage.src = "car3.png"; // Default car

carImage.onload = () => {
  console.log("Car image loaded!");
  drawCar(); // This Draws the cars image using the png image i put
};

// Function to change car based on user selection
function changeCar() {
  const selectedCar = document.getElementById("carSelector").value;
  carImage.src = selectedCar;

  carImage.onload = () => {
    drawCar(); // Redraw with new car
  };
}

// Set up canvas and context
let canvas = document.getElementById("simCanvas");
let ctx = canvas.getContext("2d");

// This draws the car based on its position and image
function drawCar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // This clears the cars position and redraws it to its starting position 
  ctx.drawImage(carImage, position, 150, 250, 120); 
}

// This resets the simulation and puts the car back at its starting point
function resetSim() {
  isRunning = false;    
  position = 0;         
  drawCar();            
}

// This starts the simulation and calculates user inputs
function startSim() {
  speed = parseFloat(document.getElementById("speedSlider").value);
  friction = parseFloat(document.getElementById("frictionSlider").value);
  tailwind = parseFloat(document.getElementById("tailwindSlider").value);
  air = parseFloat(document.getElementById("airSlider").value);

  velocity = calculateNetVelocity(); 

  if (velocity > 0) {
    isRunning = true;
    animate(); 
  } else {
    alert("The car will not move since the net velocity is zero due to the opposing forces.");
  }
}

// this function uses arithmetic operators [(speed + tailwind) - (friction + air)] to calculate the cars velocity
function calculateNetVelocity() {
  return (speed + tailwind) - (friction + air);
}

// The car movement loop
function animate() {
  if (isRunning) { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(carImage, position, 150, 250, 120); 
    position += velocity; 
    requestAnimationFrame(animate); 
  }
}
