import Notiflix from 'notiflix';

const ref ={
  form: document.querySelector('.form'),
  firstDel : document.querySelector('input[name="delay"]'),
  stepDel : document.querySelector('input[name="step"]'),
  amountDel : document.querySelector('input[name="amount"]'),
}

function onClickFormBtn (e){
  e.preventDefault();

  const delay = Number(ref.firstDel.value);
  const step = Number (ref.stepDel.value);
  const amount = Number(ref.amountDel.value);
}


ref.form.addEventListener("submit", onClickFormBtn);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


