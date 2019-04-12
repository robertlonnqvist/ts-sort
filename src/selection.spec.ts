import { expect } from "chai";
import "mocha";
import selection from "./selection";

describe("Selection sort", () => {
  it("should sort array", () => {
    expect(selection([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });
});
