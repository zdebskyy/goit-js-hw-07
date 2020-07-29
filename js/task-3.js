const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const imgList = document.querySelector('#gallery');

const pictures = images.reduce((acc, el) =>{
acc+= `<li><img class ="mod" src ="${el.url}" alt ="${el.alt}"></li>`

return acc;
}, '')


 imgList.insertAdjacentHTML('afterbegin', pictures)

 //================================================================

//  const imgList = document.querySelector("#gallery");

// const createMarkup = (items) => {
// return items.reduce(
// (acc, el) =>
// (acc += `<li><img class ="mod" src ="${el.url}" alt ="${el.alt}"></li>`),
// ""
// );
// };

// imgList.insertAdjacentHTML("afterbegin", createMarkup(images));

