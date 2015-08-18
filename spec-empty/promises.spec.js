jest.autoMockOff();

describe('promises', () => {

  xit('should resolve a value', function () {

    // create a promise p, such that the test passes

    p.then(function (value) {
      expect(value).toBe('foo');
    });
  });

  xit('should reject a promise', () => {

    // create a promise p, such that the test passes

    p.then(Function.prototype, function (e) {
      expect(e).toBe('an error');
    });
  });

  xit('handles multiple promises', () => {

    // create an array of promises, such that the test passes

    Promise.all(promises).then(values => {
      expect(values).toBe([1, 2, 3]);
    });
  });

  xit('returns the value of the first resolved promise', () => {

    // create an array of promises, such that the test passes
    // hint: use jasmine.Clock.tick(10) to simulate a 10 millisecond delay

    Promise.race(promises)
      .then(value => {
        expect(value).toBe('foo');
      });
  });
});