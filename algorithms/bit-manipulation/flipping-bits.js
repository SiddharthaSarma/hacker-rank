/*
  https://www.hackerrank.com/challenges/flipping-bits/problem
*/

function processData(input) {
  input = input.split('\n');
  input.shift();
  input = input.map(Number);
  for (let i = 0; i < input.length; i++) {
    let val = ~input[i];
    let result = val < 0 ? 4294967296 + val : val;
    console.log(result);
  }
}
