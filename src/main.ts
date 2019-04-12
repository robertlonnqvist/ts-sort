import bubble from "./bubble";
import insertion from "./insertion";
import merge from "./merge";
import quick from "./quick";
import selection from "./selection";

const length = process.argv.length > 2 ? +process.argv[2] : 10;
const list = [];
while (list.length < length) {
  list.push(Math.floor(Math.random() * 999) - Math.floor(Math.random() * 999));
}

console.log(`bubble:    ${bubble(list.slice())}`);
console.log(`insertion: ${insertion(list.slice())}`);
console.log(`merge:     ${merge(list.slice())}`);
console.log(`quick:     ${quick(list.slice())}`);
console.log(`selection: ${selection(list.slice())}`);
