/*
  https://www.hackerrank.com/challenges/string-construction/problem
*/

// Solution - 1
function stringConstruction(s) {
  let count = 0;
  while (s.length) {
    let regExp = new RegExp(s[0], 'g');
    s = s.replace(regExp, '');
    count++;
  }
  return count;
}


// Solution - 2
function stringConstruction(s) {
  return [...new Set(s.split(''))].length;
}


// Solution - 3
function stringConstruction(s) {
  return new Set(s.split('')).size;
}
