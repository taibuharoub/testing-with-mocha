/* beforeEach(function () {
  return db.clear().then(function () {
    return db.save([tobi, loki, jane]);
  });
});

describe("#find()", function () {
  it("respond with matching records", function () {
    return db.find({ type: "User" }).should.eventually.have.length(3);
  });
});
 */

const expect = require("chai").expect;

//using Aysnc/await
/* beforeEach(async function () {
  await db.clear();
  await db.save([tobi, loki, jane]);
});

describe("#find()", function () {
  it("responds with matching records", async function () {
    const users = await db.find({ type: "User" });
    users.should.have.length(3);
  });
}); */

const customer = [];

before(function () {
  customer.push("ty");
});

describe("length", function () {
  it("return the length of an array", function () {
    expect(customer.length).to.equal(1);
  });
});
