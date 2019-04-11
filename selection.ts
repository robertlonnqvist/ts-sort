module.exports = function(list: number[]) {

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

  for (let i = 0; i < list.length; i++) {
    let index = findSmallest(i, list);

    if (index > i) {
      let e1 = list[index];
      let e2 = list[i];
      list[i] = e1;
      list[index] = e2;
    }
  }
  return list;
}
