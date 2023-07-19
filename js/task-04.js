const counter = document.querySelector('#counter');
const value = document.querySelector('#value');


// const buttonDecrement = counter.children[0];
// const buttonIncrement = counter.children[2];

const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;




buttonDecrement.addEventListener('click', onDecrementClic);

buttonIncrement.addEventListener('click', onIncrementClic);

let counterValue = 0;

function onDecrementClic(evt){
    evt.currentTarget.dataset.action;
    value.textContent = counterValue -= 1;
    
}

function onIncrementClic(evt) {
  evt.currentTarget.dataset.action;
  value.textContent = counterValue += 1;
}






