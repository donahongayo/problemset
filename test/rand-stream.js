/* Your tests will go here 
var RandStream = require("../lib/lib").RandStream,
  assert = require("assert");

describe("Sample RandStream test", function () {
  it("should pass if stream is readable", function () {
    var stream = new RandStream();
    assert(stream.readable);
  });
});
*/
const RandStringSource = require("../index").RandStringSource;
const RandStream = require("../lib/lib").RandStream;

describe("Problem Set 2", function () {
  this.timeout(3000);
  it("---", function (done) {
    var source = new RandStringSource(new RandStream());
    source = (data) => {
      console.log(data);
    };
    done();
  });
});
