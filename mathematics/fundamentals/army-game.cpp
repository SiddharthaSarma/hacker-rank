// https://www.hackerrank.com/challenges/game-with-cells/problem
#include <bits/stdc++.h>
#define endl "\n"
using namespace std;

int main() {
  int n, m;
  cin >> n >> m;
  cout << ((n + n % 2) * (m + m % 2)) / 4 << endl;
  return 0;
}
