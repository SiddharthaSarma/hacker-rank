/*
  https://www.hackerrank.com/challenges/cut-the-sticks/problem
*/

function cutTheSticks(arr) {
  let result = [];
  while (arr.length >= 1) {
    let min = Math.min(...arr);
    result.push(arr.length);
    arr = arr.map(e => e - min).filter(e => e != 0);
  }
  return result;
}
