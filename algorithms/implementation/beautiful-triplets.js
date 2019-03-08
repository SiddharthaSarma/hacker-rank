/*
  https://www.hackerrank.com/challenges/beautiful-triplets/problem
*/

function beautifulTriplets(d, arr) {
  var obj = arr.reduce((prev, curr, index) => {
    prev[curr] = index;
    return prev;
  }, {});
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    var k = [];
    var j = i;
    while (k.length < 4) {
      var val = arr[j] + d;
      if (obj[val] && k.length <= 4) {
        k = [...k, arr[i], val];
        j = obj[val];
      } else {
        break;
      }
    }
    if (k.length > 2) {
      console.log(k)
      resultArr.push(k);
    }
  }
  return resultArr.length;
}
