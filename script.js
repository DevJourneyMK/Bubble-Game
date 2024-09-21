

let newHit = 0;
let score = 0;
const pbtm = document.querySelector("#pbtm");

// Function to create bubbles
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 126; i++) {
    let number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${number}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

// Function to run the timer
function runTimer() {
  let timer = 30;
  document.querySelector("#timerval").textContent = timer; // Reset the timer value in UI
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
      pbtm.innerHTML = `<h1> Game Over </h1>`;
    }
  }, 1000);

  // Store the interval ID to stop it later if needed
  pbtm.dataset.timerId = timerInterval;
}

// Function to get a new hit number
function getNewHit() {
  newHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitNew").textContent = newHit;
}

// Function to increase the score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

// Event listener for clicking on bubbles
pbtm.addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === newHit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// Function to reset the game
function startGame() {
  // Clear the current interval if already running
  if (pbtm.dataset.timerId) {
    clearInterval(pbtm.dataset.timerId);
  }

  score = 0;
  document.querySelector("#scoreVal").textContent = score;

  makeBubble();
  getNewHit();
  runTimer();
}

// Add the Start button to the UI
const startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.id = "startButton";
document.querySelector("#gameControls").appendChild(startButton); // Assuming you have a container with id 'gameControls'

// Add an event listener to the Start button
startButton.addEventListener("click", startGame);
