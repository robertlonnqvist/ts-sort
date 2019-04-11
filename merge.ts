function _merge(left: number[], right: number[]): number[] {
  var result: number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  while (left.length) {
    result.push(left.shift() as number);
  }

  while (right.length) {
    result.push(right.shift() as number);
  }

  return result;
}

module.exports = function merge(list: number[]): number[] {
  if (list.length < 2) {
    return list;
  }
  var middle = list.length / 2;
  var left = list.slice(0, middle);
  var right = list.slice(middle, list.length);

  return _merge(merge(left), merge(right));
}
