const formRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output');

formRef.addEventListener('input', inputRandomText)


function inputRandomText (event) {
    spanRef.textContent = event.target.value; 
    if (spanRef.textContent === ''){
        spanRef.textContent = 'незнакомец';
    }
    
}


// if (spanRef.textContent === "") {
//     spanRef.textContent = "незнакомец";
//     } else {
//     spanRef.textContent = event.target.value;
//     }