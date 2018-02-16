/*
  https://www.hackerrank.com/challenges/luck-balance/problem
*/

function luckBalance(n, k, contests) {
  // Complete this function
  let result = contests.reduce((obj, ele) => {
    obj.totalSum += ele[0];
    if (ele[1] === 1) {
      obj.luckContests.push(ele[0]);
    }
    return obj;
  }, {
    totalSum: 0,
    luckContests: []
  });

  result.luckContests = result.luckContests.sort((a, b) => a - b);
  let luckFlip = (result.luckContests.length - k) > 0 ? result.luckContests.length - k : 0;
  let luckSum = result.luckContests.slice(0, luckFlip).reduce((a, b) => a + b, 0);
  return result.totalSum - (2 * luckSum);

}
