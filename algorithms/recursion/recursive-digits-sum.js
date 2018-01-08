/*
  https://www.hackerrank.com/challenges/recursive-digit-sum/problem
*/

function digitSum(n, k) {
  // Complete this function
  n = n.split('').map(Number);
  let sum = n.reduce((a, b) => a + b);
  return recursionSum(sum * k);
}

function recursionSum(a) {
  a = a.toString();
  if (a.length === 1) {
    return a;
  }
  a = a.split('').map(Number);
  return recursionSum(a.reduce((c, d) => c + d));
}
