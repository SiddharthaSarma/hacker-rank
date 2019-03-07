/*
  https://www.hackerrank.com/challenges/acm-icpc-team/problem
*/

function acmTeam(topic) {
  var result = [];
  for (let i = 0; i < topic.length; i++) {
    for (var j = i + 1; j < topic.length; j++) {
      var temp = 0;
      for (var k = 0; k < topic[j].length; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          temp += 1;
        }
      }
      result.push(temp);
    }
  }
  console.log(result);
  result = result.sort((a, b) => b - a);
  let i = 0;
  let count = 1;
  while (result[i] === result[i + 1]) {
    count += 1;
    i += 1;
  }
  if (!result.length) {
    result[0] = 0;
  }
  return [result[0], count];

}
