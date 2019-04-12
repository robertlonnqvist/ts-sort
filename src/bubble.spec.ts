import { expect } from "chai";
import "mocha";
import bubble from "./bubble";

describe("Bubble sort", () => {
  it("should sort array", () => {
    expect(bubble([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });
});
