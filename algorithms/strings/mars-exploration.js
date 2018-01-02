/*
  https://www.hackerrank.com/challenges/mars-exploration/problem
*/

function marsExploration(str) {
  // Complete this function
  let count = 0;
  for (let i = 0; i < str.length / 3; i++) {
    let k = i === 0 ? 0 : 1;
    count += calcDiff(str.slice((3 * i), 3 * (i + 1)));
  }
  return count;
}

function calcDiff(str) {
  let originalStr = 'SOS';
  let tempCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== originalStr[i]) {
      tempCount++;
    }
  }
  return tempCount;
}
