/*
  https://www.hackerrank.com/challenges/maximizing-xor/problem
*/

function maximizingXor(l, r) {
  let val = (l ^ r).toString(2).replace(/0/g, '1');
  return parseInt(val, 2);
}
