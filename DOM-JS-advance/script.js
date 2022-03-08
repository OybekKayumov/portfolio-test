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

document.querySelector('.nav__link').addEventListener('click', function(e) {
  // this.style.backgroundColor = 'red';
  // console.log('LINK', e.target, e.currentTarget);

  // console.log( e.currentTarget === this )  //* true

  // Stop propagation: not goog idea
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  // this.style.backgroundColor = 'green';
  // console.log('CONTAINER', e.target, e.currentTarget);
  // console.log( e.currentTarget === this )  //* true
})

document.querySelector('.nav').addEventListener('click', function(e) {
  // this.style.backgroundColor = 'blue';
  // console.log('NAV', e.target, e.currentTarget);
  // console.log( e.currentTarget === this )  //* true
},
  false //* capture event by DEFAULT is set to false
  // true   //* capture event: starts from NAV-->LINK-->CONTAINER, see consol
)

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

// understanding why THREE boxes GET THREE different background colors
// even though the CLICK only HAPPENED on ONE element (Feature button here)


//TODO Page navigation
// document.querySelectorAll('.nav__link').forEach
//   (function(el) {
//     el.addEventListener('click', function(e) {
//       e.preventDefault();
//       const id = this.getAttribute('href')

//       console.log(id);
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})       
//     })
//   })



//TODO  Event Delegation
// we need 2 steps
// 1. Add eventListener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links')
      .addEventListener('click', function(e) {
        // console.log('e.target: ', e.target);
        e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    console.log('LINK');
    const id = e.target.getAttribute('href');
    // console.log('id: ', id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

const h11 = document.querySelector('h1')
// console.log(h11.querySelectorAll('.highlight'));
// console.log(h11.childNodes);
// console.log(h11.children);

// h11.firstElementChild.style.color = 'white';
// h11.lastElementChild.style.color = 'orangered';

//todo Going upwards: parents
// console.log(h11.parentNode);
// console.log(h11.parentElement);

// h11.closest('.header').style.background = '#ffb003'
// h11.closest('h1').style.background = '#39b385'

//! closest finds Parents
//! querySelectorAll finds chields



//TODO Going sideways: selecting siblings

// console.log(h11.previousElementSibling); //* null
// console.log(h11.nextElementSibling);    //* h4

// console.log(h11.previousSibling);     //* #text
// console.log(h11.nextSibling);     //* #text

//todo all siblings
// console.log(h1.parentElement.children);

//html collection is not an array, but we can iterate, spread into an array:
// [...h11.parentElement.children].forEach(function(el) {
  // if Element is different or equal then h1, we will change the style
  // if (el !== h1) {
    // el.style.transform = 'scale(0.7)'
  // }
// })


//TODO TABBED COMPONENT
const tabs= document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(tab => tab.addEventListener('click', () => {
//   console.log('TAB');
// }))
// bad practice, if we had many tabs, we would have copy this callback function

// we will use event delegation
// For eventDelegation we need to attach the event handler on common parent element of all the elements that we're interested in
// here it is "tabsContainer"

tabsContainer.addEventListener('click', function(e) {
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab'); // span-->button

  //! Guard clause
  if (!clicked) return  //* no Error but null

  //todo Remove active classes: buttons DOWN
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'))

  //todo ACTIVATE TAB: buttons UP
  // if (clicked) {  //* old scholl
    clicked.classList.add('operations__tab--active')
  // }               //* old scholl 
  
  //todo ACTIVATE CONTENT ARE
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})



//TODO FADE ANIMATION MENU
const nav = document.querySelector('.nav');

// refactoring mouseover and mouseout
const handleHover = function(e) {

  // console.log('this: ', this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) {
        // el.style.opacity = opacity;
        el.style.opacity = this;      //! this = opacity
      }        
    });
    // logo.style.opacity = opacity;
    logo.style.opacity = this;        //! this = opacity
  }    
}

//! mouseover:
// nav.addEventListener('mouseover', handleHover(e, 0.5)); //* will not work 

// refactoring 1
// nav.addEventListener('mouseover', function(e) {   //* will work 
//   handleHover(e, 0.5);   
// })

// refactoring 2
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));   // opacity = 0.5


// 1
// nav.addEventListener('mouseover', function(e) {
    // if (e.target.classList.contains('nav__link')) {
    //   const link = e.target;
    //   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //   const logo = link.closest('.nav').querySelector('img');

    //   siblings.forEach((el) => {
    //     if (el !== link) {
    //       el.style.opacity = 0.5;
    //     }        
    //   });
    //   logo.style.opacity = 0.5;
    // }    
// })

//! opposite of mouseover is: mouseout
// nav.addEventListener('mouseout', handleHover(e, 1)); //* will not work

// refactoring 1
// nav.addEventListener('mouseout', function(e) {   //* will work 
//   handleHover(e, 1);   
// })

// refactoring 2
nav.addEventListener('mouseout', handleHover.bind(1));   // opacity = 1

// 1
// nav.addEventListener('mouseout', function(e) {
  // if (e.target.classList.contains('nav__link')) {
  //   const link = e.target;
  //   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //   const logo = link.closest('.nav').querySelector('img');

  //   siblings.forEach((el) => {
  //     if (el !== link) {
  //       el.style.opacity = 1;
  //     }        
  //   });
  //   logo.style.opacity = 1;
  // }      
// })



//TODO STICKY NAVIGATION 1.1 : window.scroll

// find section1 coords

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function() {
//     console.log(window.scrollY);

//     if (this.window.scrollY > initialCoords.top) {
//       nav.classList.add('sticky')
//     } else {
//       nav.classList.remove('sticky')
//     }
// })

//TODO STICKY NAVIGATION 1.2 : Intersection Observer API

// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log('entry: ', entry);
//   })
// }

// const obsOptions = {
//   root: null,
//   // threshold: 0.1      //* 10%
//   threshold: [0, 0.2]      //* 0 and 20%  :  SEE CONSOL
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const headerObs = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);  //* =90px

const stickyNav = function(entries) {
  // using destructuring to get the first element out of entries
  const [entry] = entries;   //*  same as entries[0]  
  // console.log(entry)

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,      //* when visible is 0%  :
  // rootMargin: '-90px'     //* box of 90px that will be applied outside of target element(header here)  
  rootMargin: `-${navHeight}px`     //* create height dynamically  

});
headerObserver.observe(headerObs);

 

//TODO REVEAL SECTIONS  
const allSections2= document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [entry] = entries; //* destructuring  entries[0]
  // console.log(entry);
  
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15       //* 15%
});

allSections2.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


//TODO LAZY LOADING IMAGES
// we select all images which have the property of "data-src"
const imgTargets = document.querySelectorAll('img[data-src]')
console.log(imgTargets);

//* NodeList(3) [img.features__img.lazy-img, img.features__img.lazy-img, img.features__img.lazy-img]
// 0: img.features__img.lazy-img
// 1: img.features__img.lazy-img
// 2: img.features__img.lazy-img
// length: 3

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);

}

const imObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0
});

imgTargets.forEach(img => imObserver.observe(img));