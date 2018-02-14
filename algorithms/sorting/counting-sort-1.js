/*
  https://www.hackerrank.com/challenges/countingsort1/problem
*/
function countingSort(arr) {
  let tempArr = new Array(100).fill(0);

  let result = arr.reduce((tempArr, ele) => {
    tempArr[ele]++;
    return tempArr;
  }, tempArr);

  return result;
}
