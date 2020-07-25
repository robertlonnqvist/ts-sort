import { expect } from "chai";
import { describe, it } from "mocha";
import random from "./random";

describe("Random list generator", () => {
  it("should generate list", () => {
    expect(random(10).length).to.equal(10);
  });

  it("should generate list with numbers", () => {
    const items = random(10);
    items.forEach((l) => expect(l).to.be.an("number"));
  });
});
