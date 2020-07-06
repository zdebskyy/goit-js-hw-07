
const lighthers = document.querySelectorAll('.lighters');
const onBtn = document.querySelector('button[data-condition="on"]')
const offBtn = document.querySelector('button[data-condition="off"]')
const RndBtn = document.querySelector('button[data-condition="random"]');
console.log(lighthers);


onBtn.addEventListener('click', turnOn)
offBtn.addEventListener('click', turnOff)
RndBtn.addEventListener('click', randomColor)


function turnOn (){
    lighthers.forEach(el =>  el.classList.add('on'));
}


function turnOff (){
    lighthers.forEach(el =>  el.classList.remove('on'));
}

function randomColor (event){
    const allLigth = document.querySelectorAll('.lighters');
    allLigth.forEach(el => {el.classList.remove('on')})
    const randomIndex = Math.floor(Math.random()*3)
    allLigth[randomIndex].classList.add('on')
}