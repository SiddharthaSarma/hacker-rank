/*
  1)sort the array
  2)consider diff between the first pair as min 
  3)compare all "consecutive pair min" with the one in step2 to get the least min.
*/

function minimumAbsoluteDifference(n, arr) {
  let val = [];
  arr = arr.sort();
  for (let i = 0; i < n - 1; i++) {
    val.push(Math.abs(arr[i] - arr[i + 1]));
  }
  val = Math.min.apply(null, val);
  return val;
}
