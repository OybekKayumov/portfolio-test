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

//? split()
const emptyStr = '';
// string is empty and no separator is specified
console.log(emptyStr.split());  //* [''];

// string and separator are both empty string
console.log(emptyStr.split(emptyStr));  //* [];

//? split(separator)
function splitString (strToSplit, separator) {
  const arrOfStrings = strToSplit.split(separator);

  console.log('The original string is: ', strToSplit);
  console.log('The separator is: ', separator);
  console.log('The array has ', arrOfStrings.length, ' elements: ', arrOfStrings.join(' / '));
}

const tempString = "Oh brave new world that has such people in it."
const monthStr = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

const space = ' ';
const comma = ',';

splitString(tempString,space);
// The original string is:  Oh brave new world that has such people in it
// The separator is:   
// The array has  10  elements:  Oh / brave / new / world / that / has / such / people / in / it.


splitString(tempString);
// The original string is:  Oh brave new world that has such people in it.
// The separator is:  undefined
// The array has  1  elements:  Oh brave new world that has such people in it.

splitString(monthStr, comma);
// The original string is:  Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
// The separator is:  ,
// The array has  12  elements:  Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec


//? split(separator, limit)
//! removing spaces from a string
// example remove spaces and semicolon from string

const names = 'Hurry Trunk; Fred Barney; Helen Rigby ; Bill Abel ;Chess Hand '

console.log('names: ', names);

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log('nameList: ', nameList);
//* (6) ['Hurry Trunk', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chess Hand', '']

