/*
  https://www.hackerrank.com/challenges/countingsort4/problem
*/

function main() {
  var n = parseInt(readLine());
  let arr = new Array(n).fill('');
  for (var a0 = 0; a0 < n; a0++) {
    var x_temp = readLine().split(' ');
    var x = parseInt(x_temp[0]);
    var s = x_temp[1];
    if (a0 < n / 2) {
      arr[x] += '-' + ' ';
    } else {
      arr[x] += s + ' '
    }
  }
  console.log(arr.join(''));
}
