import { expect } from "chai";
import { describe, it } from "mocha";

export default (
  name: string,
  sorter: (n: readonly number[]) => number[]
): void => {
  describe(`${name} sort`, () => {
    it("should sort even array", () => {
      expect(sorter([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
    });

    it("should sort odd array", () => {
      expect(sorter([3, 5, 1, 4, 2])).to.eql([1, 2, 3, 4, 5]);
    });

    it("should sort short array", () => {
      expect(sorter([3, 1])).to.eql([1, 3]);
    });

    it("should sort random array", () => {
      const array = sorter(
        Array(100)
          .fill(0)
          .map(() => Math.floor(Math.random() * 1000))
      );

      for (let i = 1; i < array.length; i++) {
        expect(array[i]).greaterThanOrEqual(array[i - 1]);
      }
    });

    it("should not modify input", () => {
      const array = [3, 1, 4, 2];
      sorter(array);
      expect(array).to.eql([3, 1, 4, 2]);
    });

    it("should handle empty array", () => {
      expect([]).to.eql([]);
    });

    it("should handle one element array", () => {
      expect([1]).to.eql([1]);
    });
  });
};
