

const titleRef = document.querySelectorAll('h2');
const liRef = document.querySelectorAll('.item');


liRef.forEach(el => {console.log(` Категория : ${el.firstElementChild.textContent}, 
количество елементов :${el.lastElementChild.children.length}`)})

 




// [...titleRef].forEach(el => [console.log(el.textContent)
// ])






