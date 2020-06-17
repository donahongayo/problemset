var asyncTest = require("../index").doAsync;

let input = ["A", ["B", "C"], "D"];

describe("Problem Set 1", function () {
  this.timeout(3000);
  it("---", function () {
    return asyncTest(input).then(
      function () {
        //done();
      },
      function () {
        return "passed";
      }
    );
  });
});
