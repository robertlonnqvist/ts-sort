export default function(input: readonly number[]): number[] {
  const items = [...input];
  for (let i = 0; i < items.length; i++) {
    const element = items[i];

    let j = i;
    while (j > 0 && items[j - 1] > element) {
      items[j] = items[j - 1];
      j = j - 1;
    }
    items[j] = element;
  }
  return items;
}
