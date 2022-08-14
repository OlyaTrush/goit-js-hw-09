const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};

let timerId = null;

function makeStatusBtn() {
  let start = true;
  let stop = false;
  return function () {
    start = !start;
    stop = !stop;
    refs.startBtn.disabled = start;
    refs.stopBtn.disabled = stop;
  };
}

const disabledSwitched = makeStatusBtn();

disabledSwitched();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBgdColor = () => {
  const color = getRandomHexColor();
  refs.bodyColor.style.background = color;
};

const onStartBtn = () => {
  timerId = setInterval(onBgdColor, 1000);
  disabledSwitched();
};

const onStopBtn = () => {
  clearInterval(timerId);
  disabledSwitched();
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
