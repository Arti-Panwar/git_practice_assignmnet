function checkPalindrome(N, str) {
  let b = "";
  let c = "";
  for (let i = 0; i < N; i++) {
    b = b + str[i];
  }
  for (let j = N - 1; j >= 0; j--) {
    c = c + str[j];
  }
  if (b == c) {
    console.log("Yes");
  }
  else {
    console.log("No");
  }

}