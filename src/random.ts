function* generator(): IterableIterator<number> {
  while (true) {
    yield Math.floor(Math.random() * 999) - Math.floor(Math.random() * 999);
  }
}

export default function(length: number): number[] {
  const g = generator();
  const items = [];
  while (items.length < length) {
    items.push(g.next().value);
  }
  return items;
}
