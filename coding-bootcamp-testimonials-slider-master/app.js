//refer buttons from html
const forwards = document.getElementById("forward");
const backward = document.getElementById("backwards");

//refer div elements from html

const blueColor = document.getElementById("blue");
const redColor = document.getElementById("red");

//set event listeners
forwards.addEventListener("click", forwardButton);
backward.addEventListener("click", backButton);

//set counter
let counter = 0;

//set functions for listeners
function forwardButton() {
  if (counter == 0) {
    blueColor.style.display = "block";
    redColor.style.display = "none";
  }
}

function backButton() {
  if (counter <= 0) {
    redColor.style.display = "block";
    blueColor.style.display = "none";
  }
  //console.log("back button hit");
}
