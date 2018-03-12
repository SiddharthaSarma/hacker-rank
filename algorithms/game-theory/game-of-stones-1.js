/*
  https://www.hackerrank.com/challenges/game-of-stones-1/problem
*/

function gameOfStones(n) {
  if (n % 7 === 1 || n % 7 === 0) {
    return 'Second';
  }
  return 'First';
}
