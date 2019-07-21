import { expect } from "chai";
import { describe, it } from "mocha";
import bubble from "./bubble";

describe("Bubble sort", () => {
  it("should sort array", () => {
    expect(bubble([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });

  it("should should not modify input", () => {
    const input = [3, 1, 4, 2];
    bubble(input);
    expect(input).to.eql([3, 1, 4, 2]);
  });
});
