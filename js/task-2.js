const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const createIngradientsList = ingredient => {
    const liItemRef = document.createElement('li');
    liItemRef.classList.add('js-list-item');
    liItemRef.textContent = ingredient;
    return liItemRef;
}


const oneCard = ingredients.map(card => createIngradientsList(card))

const ulRef = document.querySelector('#ingredients')
ulRef.append(...oneCard);





//==================================================================

// const createIngradientsList = (data) => {
//     return data.map((el) => {
//     const liItemRef = document.createElement("li");
//     liItemRef.classList.add("js-list-item");
//     liItemRef.textContent = el;
//     return liItemRef;
//     });
//     };
    
//     const ulRef = document.querySelector("#ingredients");
//     ulRef.append(...createIngradientsList(ingredients));
