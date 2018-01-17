/*
  https://www.hackerrank.com/challenges/game-of-thrones/problem
*/
function gameOfThrones(s) {
  let val = s.split('').reduce((prev, next) => {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
  let values = [];
  for (let obj in val) {
    values.push(val[obj]);
  }
  if (s.length % 2 === 0) {
    return values.every(e => e % 2 === 0) ? 'YES' : 'NO';
  } else {
    return values.filter(e => e % 2 !== 0).length === 1 ? 'YES' : 'NO';
  }
}
