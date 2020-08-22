// import './card.css';

// export function generateCard(book) {
//   let mainDiv = getMainDiv();

//   let cardDiv = document.createElement('div');
//   cardDiv.classList.add('card', 'col-sm-3');

//   let img = generateImage(book.img);
//   cardDiv.appendChild(img);

//   let cardBody = generateCardDetails(book);

//   cardDiv.appendChild(cardBody);

//   mainDiv.appendChild(cardDiv);
// }

// function getMainDiv() {
//   let main = document.getElementById('main');
//   if (!main) {
//     main = document.createElement('div');
//     main.classList.add('row');
//     main.setAttribute('id', 'main');
//     document.body.appendChild(main);
//   }
//   return main;
// }

// function generateImage(img) {
//   let img = document.createElement('img');
//   img.classList.add('card-img-top');
//   img.setAttribute('id', 'image');
//   img.setAttribute('alt', 'Book image');
//   img.setAttribute('src', img);
//   return img;
// }

// function generateCardDetails(book) {
//   let cardBody = document.createElement('div');
//   cardBody.classList.add('card-body');

//   let cardTitle = generateCardTitle(book.name);
//   cardBody.appendChild(cardTitle);

//   let cardPrice = generateCardPrice(book.price);
//   cardBody.appendChild(cardPrice);

//   let addToCart = generateCartButton(book.quantity);
//   cardBody.appendChild(addToCart);

//   return cardBody;
// }

// function generateCardTitle(name) {
//   let cardTitle = document.createElement('h6');
//   cardTitle.setAttribute('id', 'name');
//   cardTitle.textContent = name;
//   return cardTitle;
// }

// function generateCardPrice(price) {
//   let cardPrice = document.createElement('p');
//   cardPrice.setAttribute('id', 'price');
//   cardPrice.textContent = 'Rs: ' + price;
//   return cardPrice;
// }

// function generateCartButton(quantity) {
//   let addToCart = document.createElement('button');
//   addToCart.classList.add('btn', 'btn-primary');
//   addToCart.setAttribute('id', 'add-to-cart');
//   addToCart.textContent = 'Add to cart';
//   if (quantity !== 0) {
//     addToCart.addEventListener('click', () => {
//       addToCart.innerHTML = 'Added to cart';
//       addToCart.classList.add('disable');
//     });
//   } else {
//     addToCart.innerHTML = 'Out of stock';
//     addToCart.classList.add('disable');
//   }
//   return addToCart;
// }
