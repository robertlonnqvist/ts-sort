module.exports = function(list: number[]) {
  for (let j = 0; j < list.length; j++) {
    for (let i = 0; i < list.length - 1 - j; i++) {
      if (list[i] > list[i + 1]) {
        const e1 = list[i + 1];
        const e2 = list[i];
        list[i] = e1;
        list[i + 1] = e2;
      }
    }
  }
  return list;
}
