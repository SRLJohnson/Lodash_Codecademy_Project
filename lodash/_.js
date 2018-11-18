const _ = {
  clamp(x, y, z) {
    let lowerBound = Math.max(x, y);
    let upperBound = Math.min(lowerBound, z);
    return upperBound;
  },
  inRange(x, y, z) {
    let startValue = y;
    let endValue = z;
    if (z === undefined) {
      let endValue = y;
      let startValue = 0;
    } else {
      let endValue = z;
      let startValue = y;
    }
    if (startValue > endValue) {
      let swapValue = startValue;
      let startValue = endValue;
      let endValue = swapValue;
    }
    if (x >= startValue && x <= endValue) {
      return true
    } else {
      return false
    }
  }
};

console.log(_.inRange(1, 2));

// Do not write or modify code below this line.
module.exports = _;
