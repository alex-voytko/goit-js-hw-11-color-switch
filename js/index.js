let timeId = null;
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", startColorize);
refs.stopBtn.addEventListener("click", stopColorize);

function startColorize() {
  timeId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomIndex];
  }, 1000);
  refs.startBtn.setAttribute("disabled", true);
}

function stopColorize() {
  clearInterval(timeId);
  refs.startBtn.removeAttribute("disabled");
}
