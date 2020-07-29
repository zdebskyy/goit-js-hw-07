const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', validation)

function validation (event){
    inputRef.textContent = event.target.value;

    if(inputRef.textContent.length == inputRef.dataset.length){
        
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    }else{
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')
    }
}