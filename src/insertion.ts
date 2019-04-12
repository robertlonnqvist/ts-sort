export default function(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    let j = i;
    while (j > 0 && list[j - 1] > element) {
      list[j] = list[j - 1];
      j = j - 1;
    }
    list[j] = element;
  }
  return list;
}
