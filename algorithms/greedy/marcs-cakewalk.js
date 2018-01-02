/*
  https://www.hackerrank.com/challenges/marcs-cakewalk/problem
*/

function marcsCakewalk(calorie) {
  let val = calorie.sort((a, b) => a - b).reverse().reduce((a, b, c) => {
    return a + (b * Math.pow(2, c));
  }, 0);

  return val;
}
