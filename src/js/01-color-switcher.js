const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};

let timerId = null;

// refs.stopBtn.disabled = true;
// function makeStatusBtn() {
//   refs.startBtn.toggleAttribute('disabled');
//   refs.stopBtn.toggleAttribute('disabled');
// }

function makeStatusBtn(status) {
  return function() {
    refs.startBtn.disabled = status;
    refs.stopBtn.disabled = !status;
  };
}

const start = makeStatusBtn(true);
const stop = makeStatusBtn(false);

stop();


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBgdColor = () => {
  const color = getRandomHexColor();
  refs.bodyColor.style.background = color;
};

const onStartBtn = () => {
  timerId = setInterval(onBgdColor, 1000);
  // makeStatusBtn();
  start();
};

const onStopBtn = () => {
  clearInterval(timerId);
  // makeStatusBtn();
  stop();
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
