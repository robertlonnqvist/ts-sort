export default function(items: number[]): number[] {
  for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < items.length - 1 - j; i++) {
      if (items[i] > items[i + 1]) {
        [items[i + 1], items[i]] = [items[i], items[i + 1]];
      }
    }
  }
  return items;
}
