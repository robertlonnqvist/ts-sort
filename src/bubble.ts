export default function bubble(list: number[]) {
  for (let j = 0; j < list.length; j++) {
    for (let i = 0; i < list.length - 1 - j; i++) {
      if (list[i] > list[i + 1]) {
        [list[i + 1], list[i]] = [list[i], list[i + 1]];
      }
    }
  }
  return list;
}
