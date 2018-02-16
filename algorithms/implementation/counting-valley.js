/*
  https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
  let result = s.split('').reduce((obj, ele) => {
    if (ele === 'U') {
      obj.count++;
    } else {
      obj.count--;
    }
    if (obj.count == 0 && ele === 'U') {
      obj.valley++;
    }
    return obj;
  }, {
    count: 0,
    valley: 0
  });
  return result.valley;
}
