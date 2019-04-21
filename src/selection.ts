export default function(items: number[]): number[] {
  for (let i = 0; i < items.length; i++) {
    let index = 0;
    let smallest = items[i];
    for (let j = i + 1; j < items.length; j++) {
      if (smallest > items[j]) {
        index = j;
        smallest = items[j];
      }
    }
    if (index > i) {
      [items[index], items[i]] = [items[i], items[index]];
    }
  }
  return items;
}
