'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();  // page didn't jump when you press "Open account"

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal)
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//todo SELECTING ELEMENTS
// console.log(document.documentElement);  //* html
// console.log(document.head);             //* head
// console.log(document.body);             //* body

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1')

const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);

// console.log( document.getElementsByClassName('btn') )


//todo CREATING AND SELECTING ELEMENTS
//.insertAdjacentHTML

const message = document.createElement('div');

message.classList.add('cookie-message')
message.textContent = 'We use cookies for improve functionality and analytics'

message.innerHTML = 'We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)


//todo DELETING ELEMENTS

document.querySelector('.btn--close-cookie').addEventListener('click', () =>{
  message.remove(); //* new
  // message.parentElement.removeChild(message); //* old
})  

//todo Styles

message.style.backgroundColor = '#37383d'
message.style.width = '120%'
message.style.marginLeft = '20px'

// console.log(message.style.height);  //? empty line
// console.log(message.style.backgroundColor);  //? not empty

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);  //* 49px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(getComputedStyle(message).height);   //* 89px

document.documentElement.style.setProperty('--color-primary', 'orangered')
                              //* set       name of property     value


// Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);


// Non standard: doesn't work like standard (undefined)
// console.log(logo.designer);                   //* undefined
//we can get using getAttribute:
// console.log(logo.getAttribute('designer'));   //* Jonas

logo.alt = 'Beautiful minimalist logo';

//setAttribute
logo.setAttribute('company', 'Bankist')

//! Absolute URL
// http://127.0.0.1:5501/folder-name/img/logo.png

//! Relative URL to folder o the folder, in which "index.html" is located
// src="img/logo.png"

// console.log(logo.src); 
// console.log(logo.getAttribute('src'));   //* img/logo.png

const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// but
const link2 = document.querySelector('.nav__link--btn');
// console.log(link2.href);
// console.log(link2.getAttribute('href'));

// Data attributes
// console.log(logo.dataset.versionNumber);
//* 3.0 from index.html, line 25.


// Classes, use these
logo.classList.add('name', 'name1', 'name2')
logo.classList.remove('name')
logo.classList.toggle('name')
logo.classList.contains('name')   // not includes

// don't use, because it will override all existing classes
// and allows to put only ONE class on element
logo.className = 'jonas'


// Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) =>{
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X / Y): ',
           window.pageXOffset,
           window.pageYOffset);

  console.log('height/width', 
      document.documentElement.clientHeight,
      document.documentElement.clientWidth );

  // Scrolling
  // window.scrollTo(s1coords.left, s1coords.top)    //* works correctly ONLY from top of page

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset)    //* works correctly

  //todo Add animation (Old school)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  
  //todo Add animation (Modern school)
  // section1.scrollIntoView({behavior: 'auto'})
  section1.scrollIntoView({behavior: 'smooth'})

})

//todo Events

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', (e) =>{
  // alert('addEventListener: Great! You are reading the heading :D' );
  // console.log('addEventListener: Great! You are reading the heading :D' );
// })

// h1.onmouseenter = () => {
  // alert('addEventListener: Great! You are reading the heading' );
// }

//todo Remove event
const alertH1 = () => {
  // alert('addEventListener: Great! You are reading the heading :D' ); //* only ONCE

  // h1.removeEventListener('mouseenter', alertH1)
}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000)

//todo Event Propagation

// rgb(255, 255, 255 )
// #fff

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomInt = (min, max) => {
  Math.floor(Math.random() * (max - min + 1) + min);
}

const randomColor = () => {
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
}

console.log(randomInt);
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = 'red';
  console.log('LINK', e.target, e.currentTarget);

  console.log( e.currentTarget === this )  //* true

  // Stop propagation: not goog idea
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = 'green';
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log( e.currentTarget === this )  //* true
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = 'blue';
  console.log('NAV', e.target, e.currentTarget);
  console.log( e.currentTarget === this )  //* true
})

//! console.log('NAV', e.target);
//* output is same : e.target - bubbles from child --> parent --> parent
{/* <a class="nav__link" href="#" style="background-color: red;">Features</a>
<a class="nav__link" href="#" style="background-color: red;">Features</a>
<a class="nav__link" href="#" style="background-color: red;">Features</a> */}

//! e.currentTarget: ELEMENT, ON WHICH THE EVENT IS ATTACHED

//! parent 1
{/* <a class="nav__link" href="#" style="background-color: red;">Features</a> */}
{/* <ul class="nav__links" style="background-color: green;"></ul> */}


//! parent 2
{/* <nav class="nav" style="background-color: blue;">   
  <ul class="nav__links" style="background-color: green;">   
    <li class="nav__item">
     <a class="nav__link" href="#" style="background-color: red;  ">Features</a>                                           
    </li>       
  </ul>
</nav> */}

