/*
  https://www.hackerrank.com/challenges/repeated-string/problem
*/

function repeatedString(s, n) {
  let match = s.match(/a/g);
  if (!match) {
    return 0;
  }
  let aLengthInAWord = match.length;
  let totalALength = Math.floor(n / s.length) * aLengthInAWord;
  let str = s.split('').slice(0, (n % s.length)).join('');
  if (str.match(/a/g)) {
    totalALength += str.match(/a/g).length;
  }
  return totalALength;
}
