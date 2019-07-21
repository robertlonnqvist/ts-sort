import { expect } from "chai";
import "mocha";
import merge from "./merge";

describe("Merge sort", () => {
  it("should sort array", () => {
    expect(merge([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });

  it("should should not modify input", () => {
    const input = [3, 1, 4, 2];
    merge(input);
    expect(input).to.eql([3, 1, 4, 2]);
  });
});
