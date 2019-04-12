import { expect } from "chai";
import "mocha";
import random from "./random";

describe("Random list generator", () => {
  it("should generate list", () => {
    expect(random(10).length).to.equal(10);
  });

  it("should generate list with numbers", () => {
    const list = random(10);
    list.forEach(l => expect(l).to.be.an("number"));
  });
});
