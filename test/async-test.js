//with async callbacks, mocha throws an error
//if done() is called muitple tests, handy for
//catching accidental double callbacks

/* it("double done", function (done) {
  //calling `done()` twice is an error
  setImmediate(done);
    setImmediate(done);
}); */

it("double done", function (done) {
  //calling `done()` twice is an error
  setImmediate(done);
});

/* describe("User", function () {
  describe("#save", function () {
    it("should save without an error", function (done) {
      const user = new User("Ty");
      user.save(function (err) {
        if (err) done(err);
        else done();
      });
    });
  });
});

//Alternatively, use the done() callback directly
//(which will handle an error argument, if it exists)
describe("User", function () {
  describe("#save()", function () {
    it("should save without error", function (done) {
      const user = new User("Ty");
      user.save(done);
    });
  });
});
 */
