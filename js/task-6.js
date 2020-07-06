const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', event =>{
    inputRef.textContent = event.target.value;

console.log(event);

   


    if(inputRef.textContent.length == inputRef.dataset.length){
        
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    }else{
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')
    }
    
})

