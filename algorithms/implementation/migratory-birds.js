/*
  https://www.hackerrank.com/challenges/migratory-birds/problem
*/

function migratoryBirds(n, ar) {
  let birds = {};
  for (let i = 0; i < ar.length; i++) {
    if (birds.hasOwnProperty(ar[i])) {
      birds[ar[i]] += 1;
    } else {
      birds[ar[i]] = 0;
    }
  }
  let obj = {
    key: 0,
    count: 0
  }
  for (let num in birds) {
    if (birds[num] > obj.count) {
      obj = {
        key: num,
        count: birds[num]
      }
    }
  }
  return obj.key;
}
