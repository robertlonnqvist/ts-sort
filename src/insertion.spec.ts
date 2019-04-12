import { expect } from "chai";
import "mocha";
import insertion from "./insertion";

describe("Insertion sort", () => {
  it("should sort array", () => {
    expect(insertion([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });
});
