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

createIngradientsList();

const oneCard = ingredients.map(card => createIngradientsList(card))

const ulRef = document.querySelector('#ingredients')
ulRef.append(...oneCard);
