let count = 0;
let timer = null;

const display = document.getElementById("time");
const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");
const reset = document.getElementById("reset-btn");

function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

start.addEventListener("click", () => {
  if (timer === null) {
    timer = setInterval(() => {
      count++;
      display.textContent =formatTime(count);
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  count = 0;
  display.textContent = "00:00:00";
});
