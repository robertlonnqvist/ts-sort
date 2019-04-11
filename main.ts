const bubble = require("./bubble");
const insertion = require("./insertion");
const merge = require("./merge");
const quick = require("./quick");
const selection = require("./selection");

const list = [23, 42, 4, 16, 8, 15];

console.log("bubble: "    + bubble(list.slice()));
console.log("insertion: " + insertion(list.slice()));
console.log("merge: "     + merge(list.slice()));
console.log("quick: "     + quick(list.slice()));
console.log("selection: " + selection(list.slice()));
