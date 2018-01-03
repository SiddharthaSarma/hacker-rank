/*
  https://www.hackerrank.com/challenges/lonely-integer/problem
*/
function lonelyinteger(a) {
  // Complete this function
  return a.reduce((x, y) => x ^ y);
}
