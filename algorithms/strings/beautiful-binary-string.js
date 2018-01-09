/*
  https://www.hackerrank.com/challenges/beautiful-binary-string/problem
*/
function beautifulBinaryString(b) {
  let regex = new RegExp('010', 'g');
  return (b.length - b.replace(regex, '').length) / 3;
}
