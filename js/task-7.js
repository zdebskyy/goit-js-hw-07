
const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');




inputRef.addEventListener('input', sizeHandle)

function sizeHandle (event){
    const sizing = event.target.value;
    spanRef.style.fontSize = sizing + 'px'
    console.log(spanRef.style.fontSize);
    
}