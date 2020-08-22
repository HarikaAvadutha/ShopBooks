// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './header.css';
// import header from './header.html';
import { showContent } from '../template/template';
import { displayCart } from '../cart/cart';

export function header() {
  let div = document.createElement('div');
  div.classList.add('row', 'header');

  let label = headerLabel();

  div.appendChild(label);

  let innerDiv = document.createElement('div');
  let input = searchInput();
  innerDiv.classList.add('col-md-8');
  innerDiv.appendChild(input);

  let search = searchButton();
  innerDiv.appendChild(search);

  let cartIcon1 = cartIcon();

  div.appendChild(innerDiv);
  div.appendChild(cartIcon1);

  document.body.appendChild(div);
}

function headerLabel() {
  let p = document.createElement('h1');
  p.classList.add('col-md-3', 'heading');
  p.textContent = 'ShopBooks';
  return p;
}

function cartIcon() {
  let cartIcon = document.createElement('i');
  cartIcon.classList.add('fa', 'fa-shopping-cart', 'col-md-1', 'cart-icon');
  cartIcon.textContent = 'Cart';
  cartIcon.addEventListener('click', displayCart);
  return cartIcon;
}

function searchButton() {
  let searchButton = document.createElement('button');
  searchButton.setAttribute('type', 'search');
  searchButton.classList.add('search-button');
  searchButton.textContent = 'Search';
  searchButton.addEventListener('click', searchByName);
  return searchButton;
}

function searchInput() {
  let input = document.createElement('input');
  input.setAttribute('placeholder', 'Enter book name');
  input.setAttribute('id', 'input');
  input.classList.add('search-text');
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      searchByName();
    }
  });
  return input;
}

function searchByName() {
  let input = document.getElementById('input');
  let result = books_data.books.filter((book) =>
    book.name.toLowerCase().includes(input.value.toLowerCase())
  );
  showContent(result);
}
