const photo = [{
  url: "img/bike.jpg",
  title: "Велосипед"
},
{
  url: "img/car.jpg",
  title: "Черная машина"
},
{
  url: "img/cat.jpg",
  title: "Кот"
},
{
  url: "img/kid.jpg",
  title: "Пебенок с цветами"
},
{
  url: "img/kitchen.jpg",
  title: "Кухня"
},
{
  url: "img/sakura.jpg",
  title: "Цветущая сакура"
},
{
  url: "img/street.jpg",
  title: "Улица"
},
{
  url: "img/tulip.jpg",
  title: "Розовый тюльпан"
}]



function createCard() {
  const div = document.getElementsByClassName('app')[0];

  const h1 = document.createElement('h1');
  h1.classList.add('app__title');
  h1.innerText = 'Галлерея фотографий';
  div.appendChild(h1);

  const ul = document.createElement('ul');
  ul.classList.add('app__list');
  div.appendChild(ul);

  for (let i = 0; i < photo.length; i++) {
    const li = document.createElement('li');
    li.classList.add('app__item');
    ul.appendChild(li);

    const figure = document.createElement('figure');
    figure.classList.add('app__image-block');
    li.appendChild(figure);

    const img = document.createElement('img');
    img.alt = photo[i].title;
    img.src = photo[i].url;
    img.classList.add('app__image');
    figure.appendChild(img);

    const figcaption = document.createElement('figcaption');
    figcaption.innerText = photo[i].title;
    figcaption.classList.add('app__caption');
    figure.appendChild(figcaption);
  }
}

createCard();