console.log('hello world');

// import fetchLord from './js/fetchLord';
// import pagination from './js/pagination';
// let pagination;

// async function foo() {
//   let obj = await import('./js/pagination');
//   // return obj default;
// }

// import createMarkup from './js/createMarkup';
// import searhVCharacters from './js/fetchLord';
// import { entries } from 'lodash';

// const list = document.querySelector('.cards');
// const guard = document.querySelector('.js-guard');
// let page = 1;

// document.addEventListener('scroll', onScroll);
// let count = 0;

// function onScroll(evt) {
//   count += 1;
// }

// const options = {
//   root: null,
//   rootMargin: '200px',
//   threshold: 1,
// };

// const observer = new IntersectionObserver(onPagination, options);

// function currentMarkup(arr) {
//   const markup = arr.reduce(
//     (acc, { name, race }) => acc + `<li><h2>${name}</h2><h3>${race}</h3></li>`
//   );
//   list.insertAdjacentHTML('beforeend', markup);
// }

// searhVCharacters().then(data => {
//   createMarkup(data.docs);
//   observer.observe(guard);
// });

// function onPagination() {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       page += 1;
//       searhVCharacters(page).then(data => {
//         createMarkup(data.docs);
//         if (data.page === data.page) {
//           observer.unobserve(guard);
//         }
//       });
//     }
//   });
// }
