jest.autoMockOff();

describe('promises', () => {

  it('should resolve a value', function () {

    // create a promise p, such that the test passes
    let p = new Promise(function (resolve, reject) {
      resolve('foo');
    });

    p.then(function (value) {
      expect(value).toBe('foo');
    });
  });

  it('should reject a promise', () => {

    // create a promise p, such that the test passes
    let p = new Promise(function (resolve, reject) {
      reject('an error');
    });

    p.then(Function.prototype, function (e) {
      expect(e).toBe('an error');
    });
  });

  it('handles multiple promises', () => {

    // create an array of promises, such that the test passes
    let promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3)
    ];

    Promise.all(promises).then(values => {
      expect(values).toBe([1, 2, 3]);
    });
  });

  it('returns the value of the first resolved promise', () => {

    // create an array of promises, such that the test passes
    // hint: use jasmine.Clock.tick(10) to simulate a 10 millisecond delay

    let promises = [
      new Promise((resolve, reject) => {
        jasmine.Clock.tick(10);
        resolve('bar');
      }),
      Promise.resolve('foo')
    ];

    Promise.race(promises)
      .then(value => {
        expect(value).toBe('foo');
      });
  });
});