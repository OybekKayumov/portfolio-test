// split()
// a string can be broken apart into an array of multiple strings using the split method
const publish = 'free code camp'
console.log(publish); //* free code cump

console.log(publish.split(' ') ); //* 1 space
//* (3) ['free', 'code', 'camp']

console.log(publish.split('') ); //* no space
//* (14) ['f', 'r', 'e', 'e', ' ', 'c', 'o', 'd', 'e', ' ', 'c', 'a', 'm', 'p']

console.log(publish.split('  ') ); //* 2 space
//* ['free code camp']