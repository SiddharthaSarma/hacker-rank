// https://www.hackerrank.com/challenges/handshake/problem

#include<bits/stdc++.h>

using namespace std;

int main() {
  int T;
  cin >> T;
  while (T--) {
    int n;
    cin >> n;
    cout << (n * (n - 1) / 2) << "\n";
  }
  return 0;
}
