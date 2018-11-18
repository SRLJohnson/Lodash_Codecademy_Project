const _ = {
  clamp(x, y, z) {
    let lowerBound = Math.max(x, y);
    let upperBound = Math.min(lowerBound, z);
    return upperBound;
  }
};

console.log(_.clamp(3, 1, 2));


// Do not write or modify code below this line.
module.exports = _;
