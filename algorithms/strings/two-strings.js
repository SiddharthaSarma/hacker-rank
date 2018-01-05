/*
  https://www.hackerrank.com/challenges/two-strings/problem
*/

function twoStrings(s1, s2) {
  let alphabets = 'abcedefghijklmnopqrstuvwxyz';
  let result = 'NO';
  for (let i = 0; i < alphabets.length; i++) {
    if (s1.includes(alphabets[i]) && s2.includes(alphabets[i])) {
      result = 'YES';
      break;
    }
  }
  return result;
}
