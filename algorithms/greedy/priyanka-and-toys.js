/*
  https://www.hackerrank.com/challenges/priyanka-and-toys/problem
*/

function toys(arr) {
  arr = arr.sort((a, b) => a - b);
  let count = 1;
  let limit = arr[0] + 4;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      limit = arr[i] + 4;
      count++;
    }
  }
  return count;
}
