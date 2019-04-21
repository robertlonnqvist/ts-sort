function partition(items: number[], left: number, right: number) {
  const pivot = items[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }
  return i;
}

function _quick(
  items: number[],
  left: number = 0,
  right: number = items.length - 1
) {
  if (items.length > 1) {
    const index = partition(items, left, right);
    if (left < index - 1) {
      _quick(items, left, index - 1);
    }
    if (index < right) {
      _quick(items, index, right);
    }
  }
  return items;
}

export default function quick(items: readonly number[]): number[] {
  return _quick([...items]);
}
