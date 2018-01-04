/*
  https://www.hackerrank.com/challenges/jim-and-the-orders/problem
*/

function jimOrders(orders) {
  let results = [];
  for (let i = 0; i < orders.length; i++) {
    results.push({
      order: i + 1,
      time: orders[i][0] + orders[i][1]
    });
  }
  results.sort(function(a, b) {
    if (a.time === b.time) {
      return a.order - b.order;
    } else {
      return a.time - b.time;
    }
  });
  return results.map(a => a.order);

}
