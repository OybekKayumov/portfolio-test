//todo split()

// a string can be broken apart into an array of multiple strings using the split method
const publish = 'free code camp'
console.log(publish); //* free code cump

console.log(publish.split(' ') ); //* 1 space
//* (3) ['free', 'code', 'camp']

console.log(publish.split('') ); //* no space
//* (14) ['f', 'r', 'e', 'e', ' ', 'c', 'o', 'd', 'e', ' ', 'c', 'a', 'm', 'p']

console.log(publish.split('  ') ); //* 2 space
//* ['free code camp']


//todo Example 1: getting part of string
const getToken = 'bearer token';
const splitStr = getToken.split(' ');
console.log(splitStr);  //* (2) ['bearer', 'token']

const token = splitStr[1];
console.log('the token is: ', token);
//* the token is:  token

const arrFirstElem = splitStr[0];
console.log('arrFirstElem: ', arrFirstElem);
//* arrFirstElem:  bearer

// here is what is happaning in the above code:

// 1. the string is split wit " " as the separator
// 2. the first and second entrys in the array are accessed


//todo Example 2: apply array methods to a string
const morse = '-.-. --- -.. .'
const morseToChar = {
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '---': 'o',
}

const morseArr = morse.split(' ');
console.log('morseArr: ', morseArr); //* (4) ['-.-.', '---', '-..', '.']

const textArr = morseArr.map((char) => morseToChar[char])
console.log('textArr: ', textArr);   //* (4) ['c', 'o', 'd', 'e']

const text = textArr.join('') 
console.log('text: ', text);      //* text


//todo how to add a limit to split
const public = 'jasvascript html css'
console.log(public.split('', 1)); //* ['j']

console.log(public.split(' ', 1)); //* ['jasvascript']


//todo string.split()

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log('words: ', words);
//* (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

console.log('words[3]: ', words[3]); //* fox

const chars = str.split('');
console.log('chars[8]: ', chars[8]); //* k

const strCopy = str.split();
console.log('strCopy :',strCopy);
//* ['The quick brown fox jumps over the lazy dog.']

//! Syntax
// split()
// split(separator)
// split(separator, limit)

// split()
const emptyStr = '';
// string is empty and no separator is specified
console.log(emptyStr.split());  //* [''];

// string and separator are both empty string
console.log(emptyStr.split(emptyStr));  //* [];

