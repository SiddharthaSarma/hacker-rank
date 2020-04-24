#include <bits/stdc++.h>
#define endl "\n"
using namespace std;

void convertToDigits(int a[], int size) {
  int sum = 0;
  for (int i = 0; i < size; i++) {
    int n = a[i];
    while (n) {
      sum += n % 10;
      n /= 10;
    }
  }
  if (sum % 3 == 0) {
    cout << "Yes" << endl;
  } else {
    cout << "No" << endl;
  }
}

int main() {
  int T;
  cin >> T;
  while (T--) {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) {
      cin >> a[i];
    }
    convertToDigits(a, n);
  }
  return 0;
}
