function findSmallest(begin: number, list: number[]) {
  let index = 0;
  let smallest = list[begin];
  for (let i = begin + 1; i < list.length; i++) {
    if (smallest > list[i]) {
      index = i;
      smallest = list[i];
    }
  }
  return index;
}

export default function(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    const index = findSmallest(i, list);

    if (index > i) {
      const e1 = list[index];
      const e2 = list[i];
      list[i] = e1;
      list[index] = e2;
    }
  }
  return list;
}
