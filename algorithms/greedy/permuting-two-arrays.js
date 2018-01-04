/*
  https://www.hackerrank.com/challenges/two-arrays/problem
*/

function twoArrays(k, A, B) {
  // Complete this function
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  let val = 'YES';
  for (let i = 0; i < a.length; i++) {
    if (a[i] + b[i] < k) {
      val = 'NO';
      break;
    }
  }
  return val;
}
