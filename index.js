// solutions here
"use strict";

const asyncOp = require("./lib/lib").asyncOp;
const EventEmitter = require("events");
const RandStream = require("./lib/lib").RandStream;

//Problem set 1
async function doAsync(input) {
  if (!Array.isArray(input)) {
    console.log("Not an array");
  } else {
    for (const arr of input) {
      if (Array.isArray(arr)) {
        arr.map((data) => asyncOp(data));
        await sleep(1000);
      } else {
        await asyncOp(arr);
      }
    }
  }
}
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

//Problem set 2
class RandStringSource extends EventEmitter {
  constructor(rStream) {
    super(rStream);
    this.randStream = rStream;
    this.genStr = "";
    this.strEnclosed(this.randStream);
  }

  strEnclosed(str) {
    str.on("data", (data) => {
      this.genStr += data;
      var count = (
        this.genStr.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []
      ).length;
      if (count > 1) {
        var firstIndex = this.genStr.indexOf(".") + 1;
        var lastIndex = this.genStr.lastIndexOf(".");
        this.genStr = this.genStr.substring(firstIndex, lastIndex);
        console.log(this.genStr);
        this.emit("data");
      }
    });
  }
}

//Problem set 3
class ResourceManager {
  constructor(cnt) {
    this.count = cnt;
    this.resource = 0;
  }

  borrow(callback) {
    var ncount = "";
    if (this.resource < this.count) {
      ncount += callback(this.resource++);
    } else {
      const rsrc = new Resource();
      rsrc.release = () => {
        callback(this.resource - this.count);
      };
      callback(rsrc);
    }
    return ncount;
  }
}

class Resource {
  constructor() {
    this.resourceCall = null;
  }
  release() {
    this.resourceCall();
  }
}

module.exports = {
  doAsync,
  RandStringSource,
  ResourceManager,
};
