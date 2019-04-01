/*
  https://www.hackerrank.com/challenges/circular-array-rotation/problem
*/

function circularArrayRotation(a, k, queries) {
  var val = k % a.length;
  var result = [...a.slice(a.length - val), ...a.slice(0, a.length - val)];
  var returnValue = [];
  for (var i = 0; i < queries.length; i++) {
    returnValue.push(result[queries[i]]);
  }
  return returnValue;

}
