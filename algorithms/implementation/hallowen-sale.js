/*
  https://www.hackerrank.com/challenges/halloween-sale/problem
*/

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  var count = 0;
  while (true) {
    s -= p;
    if (s < 0) {
      return count;
    }
    count++;
    p -= d;
    if (p < m) {
      p = m
    }
  }
  return count;

}
