/*
  https://www.hackerrank.com/challenges/permutation-equation/problem
*/

function permutationEquation(n, p) {
  let val = [];
  for (var i = 0; i < n; i++) {
    val.push(p.indexOf(p.indexOf(i + 1) + 1) + 1);
  }
  return val;
}
