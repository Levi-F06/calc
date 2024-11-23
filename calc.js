
const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", () => {
  startBtn.parentElement.classList.add("dissapear");  
  setTimeout(showCalc, 1000);
})

function showCalc() {
  startBtn.parentElement.innerHTML = "";
  alert("Caclulator would be shown here");
}

