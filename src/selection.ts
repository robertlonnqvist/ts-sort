export default function(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    let index = 0;
    let smallest = list[i];
    for (let j = i + 1; j < list.length; j++) {
      if (smallest > list[j]) {
        index = j;
        smallest = list[j];
      }
    }
    if (index > i) {
      [list[index], list[i]] = [list[i], list[index]];
    }
  }
  return list;
}
