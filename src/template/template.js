import './template.css';

export function showContent(books) {
  let cardTemplate = document.getElementsByTagName('template')[0];
  let main = getMainDiv();
  main.innerHTML = '';
  books.forEach((book) => {
    let card = generateBookDetails(cardTemplate, book);
    main.appendChild(card);
  });
}

function getMainDiv() {
  let main = document.getElementById('main');
  if (!main) {
    main = document.createElement('div');
    main.classList.add('row', 'container1');
    main.setAttribute('id', 'main');
    document.body.appendChild(main);
  }
  return main;
}

function generateBookDetails(cardTemplate, book) {
  let card = cardTemplate.content.cloneNode(true);
  card.getElementById('image').src = book.img;
  card.getElementById('name').textContent = book.name;
  card.getElementById('price').textContent = 'Rs: ' + book.price;
  handleAddToCartButton(card, book.quantity);
  return card;
}

function handleAddToCartButton(card, quantity) {
  const button = card.getElementById('add-to-cart');

  if (quantity !== 0) {
    button.addEventListener('click', () => {
      button.innerHTML = 'Added to cart';
      button.classList.add('disable');
    });
  } else {
    button.innerHTML = 'Out of stock';
    button.classList.add('disable');
  }
}
