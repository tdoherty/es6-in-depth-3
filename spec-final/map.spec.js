jest.autoMockOff();

describe('map', () => {

  it('has unique keys', () => {
    let myMap = new Map();

    myMap.set('foo', 'bar');
    expect(myMap.get('foo')).toBe('bar');

    // update myMap such that the test passes
    myMap.set('foo', 'baz');
    expect(myMap.get('foo')).toBe('baz');
  });

  it('iterates in insertion order', () => {

    // define myMap such that the test passes
    let myMap = new Map();

    myMap.set(1, 'one');
    myMap.set(2, 'two');
    myMap.set(3, 'three');
    myMap.set(4, 'four');

    expect([...myMap.values()]).toEqual(['one', 'two', 'three', 'four']);
  });

  it('uses objects as key, and value', () => {

    let myObjKey = {foo: 'bar'};
    let myValue = {bar: 'baz'};

    // define myMap such that the tests pass
    let myMap = new Map();
    myMap.set(myObjKey, myValue);

    expect(myMap.get(myObjKey)).toBe(myValue);
    expect(myMap.get({foo: 'bar'})).toBeUndefined();
  });

  it('uses a function as key', () => {

    let myFnKey = () => 'hello world';
    let myValue = {bar: 'baz'};

    // define myMap such that the tests pass
    let myMap = new Map();
    myMap.set(myFnKey, myValue);

    expect(myMap.get(myFnKey)).toBe(myValue);
    expect(myMap.get(() => 'hello world')).toBeUndefined();
  });

});

describe('weakmap', () => {

  it('can hide properties', () => {

    // define a class 'Private' such that the tests pass
    let myWeakMap = new WeakMap();

    class Private {
      constructor(name) {
        myWeakMap.set(this, {pName: name});
      }

      get name() {
        return myWeakMap.get(this).pName;
      }

      get privateName() {
        return this.pName;
      }
    }

    p = new Private('foo');

    expect(p.name).toBe('foo');
    expect(p.privateName).toBeUndefined();
    expect(myWeakMap.has(p)).toBe(true);
  });
});
