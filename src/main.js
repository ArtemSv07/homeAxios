import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api-docs/';

const form = document.querySelector('.orders-form');
form.addEventListener('submit', sabmitForm);

function sabmitForm(event) {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;
  const textareaValue = event.target.elements[1].value;

  axios
    .post('/request', {
      email: inputValue,
      comment: textareaValue,
    })
    .then(function (data) {
      console.log(data.statusText);
      if (data.statusText) {
        form.reset();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

// const fragment = document.createDocumentFragment();
// const list = document.querySelector('.list');

// axios.defaults.baseURL = 'https://65be8084dcfcce42a6f294de.mockapi.io/api/v1/';

// axios
//   .get('https://65be8084dcfcce42a6f294de.mockapi.io/api/v1/Avto')
//   .then(data => {
//     render(data.data);
//   })
//   .catch(error => console.log(error));

// axios
//   .get('Avto')
//   .then(data => render(data.data))
//   .catch(error => console.log(error));
// axios
//   .post('/books', {
//     name: 'Fred',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios
//   .get('/books')
//   .then(data => render(data.data))
//   .catch(error => console.log(error));

// function render(params) {
//   console.log(params);
//   params.forEach(({ name }) => {
//     const listRend = document.createElement('li');
//     listRend.insertAdjacentHTML('beforeend', `<p>NAME: ${name}</p>`);
//     fragment.append(listRend);
//   });
//   list.append(fragment);
// }
// let idNumber = 45;

// axios.delete(
//   `https://65be8084dcfcce42a6f294de.mockapi.io/api/v1/books/${idNumber}`
// );

// const URL_MOK = 'https://65be8084dcfcce42a6f294de.mockapi.io/api/v1/books/';
// axios.post(URL_MOK, {
//   name: 'Artem',
// });
// /////////////////////////////////////////////////////////////////////////////////
// //  accordion

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const ac = document.querySelectorAll('.ac');

const acc = new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  // ariaEnabled: true,
  collapse: true,
  beforeOpen: currElement => {
    console.log('Hello');
  },
  onOpen: function (currentElement) {
    console.log('Welcom');
  },
  onClose: currElement => {
    console.log('Good by');
  },
});
// acc.open(0); // відкриття по індексу
/////////////////////////////////////////////////////////////
// Swiper;
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  watchOverflow: true,

  loop: true, // перемикає без обмежень

  // автопрокрутка
  // autoplay: {
  //   delay: 5000,
  //   disabledOnInteraction: false,
  // },

  // швидкість прокручування
  speed: 800,

  //ефект перемикання сладу зміна прозорості
  // effect: 'fade',
  // доповнення до fade
  // fadeEffect: {
  //   crossFade: true,
  // },

  // ефект куб
  // effect: 'cube',
  //доповнення
  // cubeEffect: {
  //   //тінь
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // вертикальний слайдер
  // direction: 'vertical',

  // spaceBetween: 25, // відступи між слайдами

  // адаптив
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   720: {
  //     slidesPerView: 1,
  //   },
  //   992: {
  //     slidesPerView: 1,
  //   },
  // },
});
/////////////////////////////////////////////////
// const cont = document.querySelector('.content');
// const a = document.querySelectorAll('.animation');
// cont.addEventListener('mouseenter', () => {
//   a.forEach(element => {
//     element.classList.remove('animation');
//   });
// });

// cont.addEventListener('mouseleave', () => {
//   a.forEach(element => {
//     element.classList.add('animation');
//   });
// });
////////////////////////////////////////////////////

// const content = document.querySelector('.content');
// const animations = document.querySelectorAll('.animations');

// // Створюємо новий інстанс Intersection Observer
// const observer = new IntersectionObserver(entries => {
//   // Перевіряємо, чи цільовий елемент був у зоні видимості
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Якщо елемент потрапив у зону видимості, додаємо клас "active"

//       animations.forEach(element => {
//         element.classList.add('active');

//         console.log(element);
//         element.classList.remove('active');
//       });

//       // targetElement.classList.add('active');
//     } else {
//       // Якщо елемент не в зоні видимості, видаляємо клас "active"
//       // targetElement.classList.remove('active');
//       element.classList.remove('active');
//     }
//   });
// });

// observer.observe(content);
// ////////////////////////////////////////////////\
