const _ = {

  clamp(x, y, z) {
    let lowerBound = Math.max(x, y);
    let upperBound = Math.min(lowerBound, z);
    return upperBound;
  },

  inRange(x, y, z) {
    let startValue = y;
    let endValue = z;
    if (endValue === undefined) {
      endValue = y;
      startValue = 0;
    } else {
      endValue = z;
      startValue = y;
    }
    if (startValue > endValue) {
      let swapValue = startValue;
      startValue = endValue;
      endValue = swapValue;
    }
    if (x >= startValue && x < endValue) {
      return true
    } else {
      return false
    }
  },

  //code written after following Codecademy step by step
  /*inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = Boolean(start <= number && number < end);
    return isInRange
  }*/

  words(string) {
    return string.split(' ');
  }
};



// Do not write or modify code below this line.
module.exports = _;
