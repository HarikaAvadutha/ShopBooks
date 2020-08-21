import './header.css';

export function header() {
  let div = document.createElement('div');
  div.classList.add('row', 'header');

  let label = headerLabel();

  div.appendChild(label);

  let innerDiv = document.createElement('div');
  let input = searchInput();
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
  return cartIcon;
}

function searchButton() {
  let searchButton = document.createElement('button');
  searchButton.setAttribute('type', 'search');
  searchButton.classList.add('search-button');
  searchButton.textContent = 'Search';
  searchButton.addEventListener('click', searchButton);
  return searchButton;
}

function searchInput() {
  let input = document.createElement('input');
  input.setAttribute('placeholder', 'Enter book name');
  input.setAttribute('id', 'input');
  input.classList.add('search-text');
  return input;
}
