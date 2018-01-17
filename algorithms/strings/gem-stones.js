/*
  https://www.hackerrank.com/challenges/gem-stones/problem
*/
function gemstones(arr) {
  return new Set(
    arr
      .map(e => e.split(''))
      .reduce((prev, curr) => curr.filter(e => prev.includes(e)))
  ).size;
}
