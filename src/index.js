import img from './resources/img2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { header } from './header/header.js';
import { template } from './card/card.js';

let books_data = {
  books: [
    {
      id: 1,
      name: "Life's Amazing Secrets",
      price: 200.0,
      quantity: 5,
      img: 'resources/img1.jpg',
    },
    {
      id: 2,
      name: 'IKIGAI',
      price: 350.0,
      quantity: 10,
      img: img,
    },
    {
      id: 3,
      name: 'The Rule Breakers',
      price: 150.0,
      quantity: 0,
      img: 'resources/img3.jpg',
    },
    {
      id: 4,
      name: 'The Secret Wish List',
      price: 250.0,
      quantity: 1,
      img: 'resources/img4.jpg',
    },
    {
      id: 5,
      name: 'Like a Love Song',
      price: 150.0,
      quantity: 4,
      img: 'resources/img5.jpg',
    },
    {
      id: 6,
      name: 'I too had a Love Story',
      price: 450.0,
      quantity: 7,
      img: 'resources/img6.jpg',
    },
    {
      id: 7,
      name: 'My Gita',
      price: 370.0,
      quantity: 5,
      img: 'resources/img7.jpg',
    },
    {
      id: 8,
      name: 'SITA',
      price: 150.0,
      quantity: 20,
      img: 'resources/img8.jpg',
    },
    {
      id: 9,
      name: 'Olympus',
      price: 240.0,
      quantity: 10,
      img: 'resources/img9.jpg',
    },
    {
      id: 10,
      name: 'The Perfect Us',
      price: 150.0,
      quantity: 4,
      img: 'resources/img10.jpg',
    },
  ],
};

(function init() {
  header();
  template();
  showContent(books_data.books);
  document.getElementById('input').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      searchByName();
    }
  });
})();

function showContent(books) {
  let cardTemplate, card;
  debugger;
  cardTemplate = document.getElementsByTagName('template')[0];
  console.log(cardTemplate);
  let main = document.getElementById('main');
  main.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    card = cardTemplate.content.cloneNode(true);
    card.getElementById('image').src = book.img;
    card.getElementById('name').textContent = book.name;
    card.getElementById('price').textContent = 'Rs: ' + book.price;
    let button = card.getElementById('add-to-cart');
    if (book.quantity !== 0) {
      button.addEventListener('click', addToCart);
    } else {
      button.innerHTML = 'Out of stock';
      button.classList.add('disable');
    }
    main.appendChild(card);
  }
}

function addToCart() {
  this.innerHTML = 'Added to cart';
  this.classList.add('disable');
}

function searchByName() {
  let input = document.getElementById('input');
  let result = books_data.books.filter((book) =>
    book.name.toLowerCase().includes(input.value.toLowerCase())
  );
  showContent(result);
}
