import bubble from "./bubble";
import insertion from "./insertion";
import merge from "./merge";
import quick from "./quick";
import random from "./random";
import selection from "./selection";

const list = random(process.argv.length > 2 ? +process.argv[2] : 10);

const result = [
  { name: "bubble", impl: bubble },
  { name: "insertion", impl: insertion },
  { name: "merge", impl: merge },
  { name: "quick", impl: quick },
  { name: "selection", impl: selection }
].map(o => {
  const start = process.hrtime();
  o.impl(list);
  const elapsed = process.hrtime(start);
  return {
    name: o.name,
    time: `${elapsed[0]}s ${elapsed[1] / 100000}ms`,
    items: list.length
  };
});

console.table(result);
