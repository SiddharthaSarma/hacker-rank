/*
  https://www.hackerrank.com/challenges/flipping-bits/problem
*/

// Solution-1
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


// Solution-2
function processData(input) {
  input = input.split('\n');
  input = input.map(Number);
  for (let i = 1; i < input.length; i++) {
    console.log(~input[i] >>> 0);
  }
}
