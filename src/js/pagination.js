import fetchLord from './fetchLord';
import { creatMarkup } from '../index';

const paginationBox = document.querySelector('.pagination');
let globalCurrentPage = 0;

// @param {Number} currentPage
// @param {Number} allPage
// return {String} markup

export default function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    markup += `<li>&#129144;</li>`;
    markup += `<li>1</li>`;
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`;
  }
  markup += `<li><b>${currentPage}</b></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li>${afterTwoPage}</li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li>...</li>`;
  }

  if (allPages > currentPage) {
    markup += `<li>${allPages}</li>`;
    markup += `<li>&#129146;</li>`;
  }
  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', handlrePagination);

function handlrePagination(evt) {
  if ((evt.target.nodeName = 'LI')) {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === '🡸') {
    fetchLord((globalCurrentPage -= 1)).then(data => {
      creatMarkup(data.docs);
      pagination(data.page, data.pages);
    });
    return;
  }
  // if () {

  // }
}
