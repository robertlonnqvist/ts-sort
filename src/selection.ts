export default function(items: readonly number[]): number[] {
  const arr = [...items];
  for (let i = 0; i < arr.length; i++) {
    let index = 0;
    let smallest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        index = j;
        smallest = arr[j];
      }
    }
    if (index > i) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  return arr;
}
