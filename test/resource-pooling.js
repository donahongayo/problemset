const ResourceManager = require("../index").ResourceManager;

describe("Problem Set 3", function () {
  this.timeout(5000);
  it("---", function (done) {
    let pool = new ResourceManager(2);
    console.log("START");

    let timestamp = Date.now();

    pool.borrow((res) => {
      console.log("RES: 1");

      setTimeout(() => {
        //res.release();
      }, 500);
    });

    pool.borrow((res) => {
      console.log("RES: 2");
    });

    pool.borrow((res) => {
      console.log("RES: 3");
      console.log("DURATION: " + (Date.now() - timestamp));
    });
    done();
  });
});
