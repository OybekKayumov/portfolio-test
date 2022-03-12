'use strict'; ///////////////////////////////////////
// Modal window
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.btn--close-modal');
var btnsOpenModal = document.querySelectorAll('.btn--show-modal');
var openModal = function openModal(e) {
    e.preventDefault(); // page didn't jump when you press "Open account"
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
var closeModal = function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnsOpenModal.forEach(function(btn) {
    btn.addEventListener('click', openModal);
}); // for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
}); //todo SELECTING ELEMENTS
// console.log(document.documentElement);  //* html
// console.log(document.head);             //* head
// console.log(document.body);             //* body
var header = document.querySelector('.header');
var allSections = document.querySelectorAll('.section'); // console.log(allSections);
document.getElementById('section--1');
var allButtons = document.getElementsByTagName('button'); // console.log(allButtons);
// console.log( document.getElementsByClassName('btn') )
//todo CREATING AND SELECTING ELEMENTS
//.insertAdjacentHTML
var message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improve functionality and analytics';
message.innerHTML = 'We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // header.prepend(message)
header.append(message); // header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)
//todo DELETING ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove(); //* new
// message.parentElement.removeChild(message); //* old
}); //todo Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.marginLeft = '20px'; // console.log(message.style.height);  //? empty line
// console.log(message.style.backgroundColor);  //? not empty
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);  //* 49px
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; // console.log(getComputedStyle(message).height);   //* 89px
document.documentElement.style.setProperty('--color-primary', 'orangered'); //* set       name of property     value
// Attributes
var logo = document.querySelector('.nav__logo'); // console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// Non standard: doesn't work like standard (undefined)
// console.log(logo.designer);                   //* undefined
//we can get using getAttribute:
// console.log(logo.getAttribute('designer'));   //* Jonas
logo.alt = 'Beautiful minimalist logo'; //setAttribute
logo.setAttribute('company', 'Bankist'); //! Absolute URL
// http://127.0.0.1:5501/folder-name/img/logo.png
//! Relative URL to folder o the folder, in which "index.html" is located
// src="img/logo.png"
// console.log(logo.src); 
// console.log(logo.getAttribute('src'));   //* img/logo.png
var link = document.querySelector('.twitter-link'); // console.log(link.href);
// console.log(link.getAttribute('href'));
// but
var link2 = document.querySelector('.nav__link--btn'); // console.log(link2.href);
// console.log(link2.getAttribute('href'));
// Data attributes
// console.log(logo.dataset.versionNumber);
//* 3.0 from index.html, line 25.
// Classes, use these
logo.classList.add('name', 'name1', 'name2');
logo.classList.remove('name');
logo.classList.toggle('name');
logo.classList.contains('name'); // not includes
// don't use, because it will override all existing classes
// and allows to put only ONE class on element
logo.className = 'jonas'; // Scrolling
var btnScrollTo = document.querySelector('.btn--scroll-to');
var section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e) {
    var s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X / Y): ', window.pageXOffset, window.pageYOffset);
    console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth); // Scrolling
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
    section1.scrollIntoView({
        behavior: 'smooth'
    });
}); //todo Events
var h1 = document.querySelector('h1'); // h1.addEventListener('mouseenter', (e) =>{
// alert('addEventListener: Great! You are reading the heading :D' );
// console.log('addEventListener: Great! You are reading the heading :D' );
// })
// h1.onmouseenter = () => {
// alert('addEventListener: Great! You are reading the heading' );
// }
//todo Remove event
var alertH1 = function alertH1() {
// h1.removeEventListener('mouseenter', alertH1)
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(function() {
    return h1.removeEventListener('mouseenter', alertH1);
}, 2000); //todo Event Propagation
// rgb(255, 255, 255 )
// #fff
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var randomInt = function randomInt(min, max) {
};
var randomColor = function randomColor() {
    "rgb(".concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ")");
};
document.querySelector('.nav__link').addEventListener('click', function(e) {
// console.log('LINK', e.target, e.currentTarget);
// console.log( e.currentTarget === this )  //* true
// Stop propagation: not goog idea
// e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e) {
// console.log('CONTAINER', e.target, e.currentTarget);
// console.log( e.currentTarget === this )  //* true
});
document.querySelector('.nav').addEventListener('click', function(e) {
// console.log('NAV', e.target, e.currentTarget);
// console.log( e.currentTarget === this )  //* true
}, false //* capture event by DEFAULT is set to false
); //! console.log('NAV', e.target);
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
document.querySelector('.nav__links').addEventListener('click', function(e) {
    // console.log('e.target: ', e.target);
    e.preventDefault(); // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        console.log('LINK');
        var id = e.target.getAttribute('href'); // console.log('id: ', id);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
var h11 = document.querySelector('h1'); // console.log(h11.querySelectorAll('.highlight'));
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
var tabs = document.querySelectorAll('.operations__tab');
var tabsContainer = document.querySelector('.operations__tab-container');
var tabsContent = document.querySelectorAll('.operations__content'); // tabs.forEach(tab => tab.addEventListener('click', () => {
//   console.log('TAB');
// }))
// bad practice, if we had many tabs, we would have copy this callback function
// we will use event delegation
// For eventDelegation we need to attach the event handler on common parent element of all the elements that we're interested in
// here it is "tabsContainer"
tabsContainer.addEventListener('click', function(e) {
    // const clicked = e.target.parentElement;
    var clicked = e.target.closest('.operations__tab'); // span-->button
    //! Guard clause
    if (!clicked) return; //* no Error but null
    //todo Remove active classes: buttons DOWN
    tabs.forEach(function(t) {
        return t.classList.remove('operations__tab--active');
    });
    tabsContent.forEach(function(c) {
        return c.classList.remove('operations__content--active');
    }); //todo ACTIVATE TAB: buttons UP
    // if (clicked) {  //* old scholl
    clicked.classList.add('operations__tab--active'); // }               //* old scholl 
    //todo ACTIVATE CONTENT ARE
    document.querySelector(".operations__content--".concat(clicked.dataset.tab)).classList.add('operations__content--active');
}); //TODO FADE ANIMATION MENU
var nav = document.querySelector('.nav'); // refactoring mouseover and mouseout
var handleHover = function handleHover(e) {
    var _this = this;
    // console.log('this: ', this, e.currentTarget);
    if (e.target.classList.contains('nav__link')) {
        var _link = e.target;
        var siblings = _link.closest('.nav').querySelectorAll('.nav__link');
        var _logo = _link.closest('.nav').querySelector('img');
        siblings.forEach(function(el) {
            if (el !== _link) // el.style.opacity = opacity;
            el.style.opacity = _this; //! this = opacity
        }); // logo.style.opacity = opacity;
        _logo.style.opacity = this; //! this = opacity
    }
}; //! mouseover:
// nav.addEventListener('mouseover', handleHover(e, 0.5)); //* will not work 
// refactoring 1
// nav.addEventListener('mouseover', function(e) {   //* will work 
//   handleHover(e, 0.5);   
// })
// refactoring 2
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); // opacity = 0.5
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
nav.addEventListener('mouseout', handleHover.bind(1)); // opacity = 1
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
var headerObs = document.querySelector('.header');
var navHeight = nav.getBoundingClientRect().height; // console.log(navHeight);  //* =90px
var stickyNav = function stickyNav(entries) {
    // using destructuring to get the first element out of entries
    var _entries = _slicedToArray(entries, 1), entry = _entries[0]; //*  same as entries[0]  
    // console.log(entry)
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
var headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    //* when visible is 0%  :
    // rootMargin: '-90px'     //* box of 90px that will be applied outside of target element(header here)  
    rootMargin: "-".concat(navHeight, "px") //* create height dynamically  
});
headerObserver.observe(headerObs); //TODO REVEAL SECTIONS  
var allSections2 = document.querySelectorAll('.section');
var revealSection = function revealSection(entries, observer) {
    var _entries2 = _slicedToArray(entries, 1), entry = _entries2[0]; //* destructuring  entries[0]
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
var sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15 //* 15%
});
allSections2.forEach(function(section) {
    sectionObserver.observe(section); // section.classList.add('section--hidden');
}); //TODO LAZY LOADING IMAGES
// we select all images which have the property of "data-src"
var imgTargets = document.querySelectorAll('img[data-src]'); // console.log(imgTargets);
//* NodeList(3) [img.features__img.lazy-img, img.features__img.lazy-img, img.features__img.lazy-img]
// 0: img.features__img.lazy-img
// 1: img.features__img.lazy-img
// 2: img.features__img.lazy-img
// length: 3
var loadImg = function loadImg(entries, observer) {
    var _entries3 = _slicedToArray(entries, 1), entry = _entries3[0]; // console.log(entry);
    if (!entry.isIntersecting) return; // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
};
var imObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '-200px' //  if +200px, then img should start loading, and we don't see any delay in loading when we bowse the page: imgs already fully downloaded
});
imgTargets.forEach(function(img) {
    return imObserver.observe(img);
}); //TODO BUILDING A SLIDER COMPONENT
var slides = document.querySelectorAll('.slide');
var btnLeft = document.querySelector('.slider__btn--left');
var btnRight = document.querySelector('.slider__btn--right');
var curSlide = 0;
var maxSlide = slides.length; // const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-850px)';
// slider.style.overflow = 'visible';
// C
// slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`)
//translateX will move:  1st: to 0%, 2nd: 100%, 3d: 200%, 4th: 300%,  
//! refactor code B:
var goToSlide = function goToSlide(slide) {
    slides.forEach(function(s, i) {
        return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
}; // D
goToSlide(0); //todo slide move to right: NEXT SLIDE
// E 
var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) //* avoid EMPTY last slide 
    curSlide = 0;
    else curSlide++; //* +1
    goToSlide(curSlide);
    activateDot(curSlide);
}; // H
var prevSlide = function prevSlide() {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
}; // F
btnRight.addEventListener('click', nextSlide); // G
btnLeft.addEventListener('click', prevSlide); // 1
// btnRight.addEventListener('click', function() {
// if (curSlide === maxSlide - 1) {  //* avoid EMPTY last slide 
//   curSlide = 0
// } else {
//   curSlide++;  //* +1
// }
// B: continue
// goToSlide(curSlide);
// A : DRY
// slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
// we should do  1st: to    0%, 2nd: 100%, 3d: 200%, 4th: 300%,  
// curSlide = 1: 1st: to -100%, 2nd:   0%, 3d: 100%, 4th: 200%,  
// })
//TODO BUILDING A SLIDER COMPONENT : left and right keys
document.addEventListener('keydown', function(e) {
    console.log('e: ', e); //* ArrowRight  ArrowLeft
    if (e.key === 'ArrowLeft') prevSlide(); //* the reason why create separated functions
    e.key === 'ArrowRight' && nextSlide(); //? short-circuit
}); //todo add dots
var dotContainer = document.querySelector('.dots');
var createDots = function createDots() {
    // slides.forEach((s, i) => {
    slides.forEach(function(_, i) {
        //* _ variable we don't need
        dotContainer.insertAdjacentHTML('beforeend', "\n        <button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>\n      "));
    });
};
createDots(); // go to current dot
dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
        //  console.log('DOT');
        //  const slide = e.target.dataset.slide;
        var slide = e.target.dataset.slide; // * destructuring
        goToSlide(slide);
        activateDot(curSlide);
    }
}); // add different color to active dot
var activateDot = function activateDot(slide) {
    // select all dots
    document.querySelectorAll('.dots__dot').forEach(function(dot) {
        return dot.classList.remove('dots__dot--active');
    }); // how do we select one that we are interested in
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add('dots__dot');
};
activateDot(0); // refactoring
// const init = function() {
//   goToSlide();
//   createDots();
//   activateDot();
// }
// init();
//TODO LIFECYCLE DOM
//todo HTML and JS need to be loaded, NOT wait for images and other external resources to load
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('HTML parsed and DOM tree is built!', e);
}); //todo HTML, CSS and JS , images and other external resources are LOADED
window.addEventListener('load', function(e) {
    console.log('Page fully loaded: ', e);
}); //todo MESSAGE ON CLOSE PAGE

//# sourceMappingURL=index.388e8e6c.js.map
