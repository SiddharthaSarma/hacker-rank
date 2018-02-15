/*
  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] !== 1) {
      i = i + 1;
    }
    count++;
  }
  return count;
}
