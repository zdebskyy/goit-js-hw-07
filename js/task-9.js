const mainUlRef = document.querySelector('#categories');
const liCategoryItem = document.querySelectorAll('li.item');

liCategoryItem.forEach(el => {
    el.querySelector('ul').style.display = 'none'; 
    el.addEventListener('click', onSwitch);
});

function onSwitch (event) {
    const tapped = event.target.closest('li')
    const visibility = tapped.querySelector('ul').style.display;
    tapped.querySelector('ul').style.display = visibility == 'block' ? 'none' : 'block';
}