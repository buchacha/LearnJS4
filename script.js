function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

alert(pow(4,6)) // 4096