const _merge = (
  left: readonly number[],
  right: readonly number[],
): number[] => {
  const result: number[] = [];

  let rightIndex = 0;
  let leftIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const merge = (input: readonly number[]): number[] => {
  const items = [...input];
  if (items.length < 2) {
    return items;
  }
  const middle = items.length / 2;
  const left = items.slice(0, middle);
  const right = items.slice(middle, items.length);

  return _merge(merge(left), merge(right));
};

export default merge;
