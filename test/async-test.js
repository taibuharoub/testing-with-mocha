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
  setImmediate(done);
});
