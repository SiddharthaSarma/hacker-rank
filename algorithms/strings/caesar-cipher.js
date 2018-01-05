/*
  https://www.hackerrank.com/challenges/caesar-cipher-1/problem
*/

function caesarCipher(s, k) {
  let val = '';
  for (let i = 0; i < s.length; i++) {
    let char = s.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      val += String.fromCharCode(((char - 97 + k) % 26) + 97);
    }
    else if (char >= 65 && char <= 90) {
      val += String.fromCharCode(((char - 65 + k) % 26) + 65);
    }
    else {
      val += s[i];
    }
  }
  return val;
}
