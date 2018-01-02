/*
  https://www.hackerrank.com/challenges/mark-and-toys/problem
*/

function maxiumumToys(prices, k) {
    let temp = 0;
    let count =0;
    prices = prices.sort((a, b) => a-b);
    for(let i=0; i<prices.length; i++) {
       if(temp + prices[i] <= k) {
           temp = temp + prices[i];
           count++;
       } else {
           break;
       }
    }
    return count;
}
