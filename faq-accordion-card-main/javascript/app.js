const clickFirstLink = document.getElementById("clickOne");
const clickSecondLink = document.getElementById("clickTwo");

//event listeners

clickFirstLink.addEventListener("click", toggleFirstQuestion);
clickSecondLink.addEventListener("click", toggleSecondQuestion);

//functions

function toggleFirstQuestion() {
  var element = document.getElementById("answer");
  element.classList.toggle("hidden");
}

function toggleSecondQuestion() {
  var element = document.getElementById("answerOne");
  element.classList.toggle("hidden");
}
