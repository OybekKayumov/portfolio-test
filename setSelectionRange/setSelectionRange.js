// Метод HTMLInputElement.setSelectionRange() устанавливает начальное и конечное положение выделения текста в элементе <input>

// В более новых версиях браузеров, можно дополнительно установить направление выделения текста, что позволит, например, определить, что выделение сделано нажатием и перетаскиванием курсора мыши от конца выделенного текста до начала.

// Этот метод позволяет одним вызовом обновить свойства HTMLInputElement.selectionStart, selectionEnd, и selectionDirection

// Syntax
// inputElement.setSelectionRange(selectionStart, selectionEnd, [optional] selectionDirection);

// selectionStart - индекс первого выделенного символа,
// selectionEnd - индекс последнего выделенного символа,
// selectionDirection - [optional] строка, определяющая направления произведенного выделения. Принимаются значения "forward", "backward", или "none", если направление выделения неизвестно или неважно.

function selectText() {
  const input = document.getElementById('mytextbox');
  input.focus();
  // input.setSelectionRange(9, 9)    //* focus after "F" 
  input.setSelectionRange(2, 12)      //*  'zilla Fire' 
}

// press button to see result

// async

// const fetch = require('node-fetch');
// const fs = require('fs');

//!setTimeout
//? setTimeout(() => {
//   console.log('wait 1 sec');
// }, 1000);

// nested setTimeout

//? setTimeout(() => {
//   console.log('3');
//   setTimeout(() => {
//     console.log('2');
//     setTimeout(() => {
//       console.log('1');
//     }, 1000);
//   }, 1000);
// }, 1000);

//* 3
// 2
// 1

//! fetch
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then((res) => res.json())
//   .then((data) => console.log('data: ', data))
//   .catch((err) => console.error(err));
  

// //! async await
// const fetchPokemon = async (id) => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await res.json();
    
//     console.log('data: ', data);
//   } catch (err) {
//     console.error(err);
//   }  
// }

// fetchPokemon(5);