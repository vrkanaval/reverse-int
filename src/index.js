module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1;
      }

      let reversedNum = 0;

      while (n > 0) {
        reversedNum = reversedNum * 10 + n % 10;
        n = Math.floor(n / 10);
      }
    
      return reversedNum;

}
