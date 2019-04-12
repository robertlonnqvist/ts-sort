function* generator() {
  while (true) {
    yield Math.floor(Math.random() * 999) - Math.floor(Math.random() * 999);
  }
}

export default function(length: number) {
  const g = generator();
  const list = [];
  while (list.length < length) {
    list.push(g.next().value);
  }
  return list;
}
