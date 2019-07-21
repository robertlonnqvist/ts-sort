import { expect } from "chai";
import { describe, it } from "mocha";
import quick from "./quick";

describe("Quick sort", () => {
  it("should sort array", () => {
    expect(quick([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });

  it("should should not modify input", () => {
    const input = [3, 1, 4, 2];
    quick(input);
    expect(input).to.eql([3, 1, 4, 2]);
  });
});
