class Javabuzz {

  _isDivisibleBy(divisor, number) {
    return number % divisor === 0;
}

  play(number) {
    if (this._isDivisibleBy(15, number)) {
      return 'javabuzz';
  }  else if (this._isDivisibleBy(5, number)) {
      return 'buzz';
  }  else if (this._isDivisibleBy(3, number)) {
      return 'fizz';
  } else {
      return number;
  }
}
};

var javabuzz = new Javabuzz();

for (var num = 1; num <= 100; num++) {
  console.log(javabuzz.play(num));
}