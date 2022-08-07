const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBgdColor = () => {
  const color = getRandomHexColor();
  refs.bodyColor.style.background = color;
};

const changeButtonStatus = (start, stop) => {
  refs.startBtn.disabled = start;
  refs.stopBtn.disabled = stop;
};

const onStartBtn = () => {
  timerId = setInterval(onBgdColor, 1000);
  changeButtonStatus(true, false);
};

const onStopBtn = () => {
  clearInterval(timerId);
  changeButtonStatus(false, true);
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
