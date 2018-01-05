/*
  https://www.hackerrank.com/challenges/string-construction/problem
*/
function stringConstruction(s) {
  let count = 0;
  while (s.length) {
    let regExp = new RegExp(s[0], 'g');
    s = s.replace(regExp, '');
    count++;
  }
  return count;
}
