/*
  https://www.hackerrank.com/challenges/missing-numbers/problem
*/
function missingNumbers(arr, brr) {
  let obj = {};
  for (let i = 0; i < brr.length; i++) {
    if (obj.hasOwnProperty(brr[i])) {
      obj[brr[i]] += 1;
    }
    else {
      obj[brr[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] -= 1;
    obj[arr[i]] === 0 ? delete obj[arr[i]] : null;
  }
  return Object.keys(obj);
}
