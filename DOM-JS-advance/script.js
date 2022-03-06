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

console.log(message.style.height);  //? empty line
console.log(message.style.backgroundColor);  //? not empty

// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);  //* 49px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);   //* 89px

document.documentElement.style.setProperty('--color-primary', 'orangered')
                              //* set       name of property     value
                              
