const expect = require("chai").expect;

describe("Array", () => {
  describe("#indexxOf()", function () {
    it("should return -1 when the value is not present", function () {
      expect([1, 2, 3].indexOf(3), -1);
    });
  });
});
