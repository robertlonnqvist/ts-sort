import { expect } from "chai";
import { describe, it } from "mocha";

export default function (
  name: string,
  sorter: (n: readonly number[]) => number[]
): void {
  describe(`${name} sort`, () => {
    it("should sort array", () => {
      expect(sorter([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
    });

    it("should should not modify input", () => {
      const input = [3, 1, 4, 2];
      sorter(input);
      expect(input).to.eql([3, 1, 4, 2]);
    });
  });
}
