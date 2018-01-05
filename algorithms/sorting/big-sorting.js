/*
  https://www.hackerrank.com/challenges/big-sorting/problem
*/

function bigSorting(arr) {
  return arr.sort((a, b) => {
    return a.length != b.length ? a.length - b.length : a.localeCompare(b);
  });
}

