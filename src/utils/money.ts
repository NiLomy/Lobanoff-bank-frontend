export function money(m: number) {
  const buffer = String(m);
  let ans = "";
  let q = 0;
  for (let i = buffer.length - 1; i >= 0; i--) {
    q++;
    ans = buffer[i] + ans;
    if (q === 3) {
      q = 0;
      ans = " " + ans;
    }
  }
  return ans;
}
