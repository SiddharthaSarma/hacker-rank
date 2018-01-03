/*
  https://www.hackerrank.com/challenges/sum-vs-xor/problem
*/

function solve(n) {
  let c = 0;
  while (n) {
    c += n % 2 ? 0 : 1;
    n = parseInt(n / 2);
  }
  return Math.pow(2, c);
}

