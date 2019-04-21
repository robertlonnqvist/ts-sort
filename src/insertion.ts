export default function(items: readonly number[]): number[] {
  const arr = [...items];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    let j = i;
    while (j > 0 && arr[j - 1] > element) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = element;
  }
  return arr;
}
