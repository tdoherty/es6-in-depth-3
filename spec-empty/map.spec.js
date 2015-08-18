jest.autoMockOff();

describe('map', () => {

  xit('has unique keys', () => {
    let myMap = new Map();

    myMap.set('foo', 'bar');
    expect(myMap.get('foo')).toBe('bar');

    // update myMap such that the test passes

    expect(myMap.get('foo')).toBe('baz');
  });

  xit('iterates in insertion order', () => {

    // define myMap such that the test passes

    expect([...myMap.values()]).toEqual(['one', 'two', 'three', 'four']);
  });

  xit('uses objects as key, and value', () => {

    let myObjKey = {foo: 'bar'};
    let myValue = {bar: 'baz'};

    // define myMap such that the tests pass

    expect(myMap.get(myObjKey)).toBe(myValue);
    expect(myMap.get({foo: 'bar'})).toBeUndefined();
  });

  xit('uses a function as key', () => {

    let myFnKey = () => 'hello world';
    let myValue = {bar: 'baz'};

    // define myMap such that the tests pass

    expect(myMap.get(myFnKey)).toBe(myValue);
    expect(myMap.get(() => 'hello world')).toBeUndefined();
  });

});

describe('weakmap', () => {

  xit('can hide properties', () => {

    // define a class 'Private' such that the tests pass
    let myWeakMap = new WeakMap();

    p = new Private('foo');

    expect(p.name).toBe('foo');
    expect(p.privateName).toBeUndefined();
    expect(myWeakMap.has(p)).toBe(true);
  });
});
