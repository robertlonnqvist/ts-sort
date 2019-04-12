import { expect } from "chai";
import "mocha";
import quick from "./quick";

describe("Quick sort", () => {
  it("should sort array", () => {
    expect(quick([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });
});
