import './card.css';

export function template() {
  let test = document.createElement('div');
  test.classList.add('test');
  test.setAttribute('id', 'thss');

  let template = document.createElement('template');
  template.classList.add('content');

  let div = document.createElement('div');
  div.classList.add('card', 'col-sm-3');

  template.appendChild(div);
  console.log(template);
  let img = document.createElement('img');
  img.classList.add('card-img-top');
  img.setAttribute('id', 'image');
  img.setAttribute('alt', 'Book image');

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  let cardTitle = document.createElement('h5');
  cardTitle.setAttribute('id', 'name');

  let cardText = document.createElement('p');
  cardText.setAttribute('id', 'price');

  let addToCart = document.createElement('a');
  addToCart.classList.add('btn', 'btn-primary');
  addToCart.setAttribute('id', 'add-to-cart');
  addToCart.textContent = 'Add to cart';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(addToCart);

  div.appendChild(img);
  div.appendChild(cardBody);
}
