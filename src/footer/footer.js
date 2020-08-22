import footer from './footer.html';
import './footer.css';

export function displayFooter() {
  let footerDiv = document.createElement('div');
  footerDiv.classList.add('footer');
  footerDiv.innerHTML = footer;
  document.body.appendChild(footerDiv);
}
