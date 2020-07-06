

const incrButton = document.querySelector('button[data-action="increment"]')
const decrButton = document.querySelector('button[data-action="decrement"]')
const span = document.querySelector('#value')
let counterValue = 0;

incrButton.addEventListener('click', onIncrement)
decrButton.addEventListener('click', onDecrement)


function increment(){
    counterValue += 1; 
}

function decrement (){
    counterValue -= 1;
}

function onIncrement(){
    increment()
    span.textContent = counterValue;
}
function onDecrement(){
    decrement()
    span.textContent = counterValue;
}

