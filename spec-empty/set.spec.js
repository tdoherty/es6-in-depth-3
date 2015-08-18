jest.autoMockOff();

describe('set', () => {

  xit('has unique values', () => {
    let mySet = new Set();

    // add the value 1 to mySet multiple times to make the tests pass

    expect(mySet.size).toBe(1);
    expect(mySet.has(1)).toBe(true);
  });

  xit('can take any values', () => {
    let myStringVal = 'stringy';
    let myObjVal = {foo: 'bar'};
    let myFnVal = () => {};

    // define the set mySet, to make the tests pass

    expect(mySet.has(myStringVal)).toBe(true);
    expect(mySet.has(myObjVal)).toBe(true);
    expect(mySet.has(myFnVal)).toBe(true);

    expect(mySet.has('stringy')).toBe(true);
    expect(mySet.has({foo: 'bar'})).toBe(false);
    expect(mySet.has(() => {})).toBe(false);
  });

  xit('treats NaN as equal', () => {

    let mySet = new Set();
    mySet.add(NaN);

    // define otherNaN such that the tests pass, without assigning it NaN

    expect(mySet.has(otherNaN)).toBe(true);
  });
});

describe('weakset', () => {

  xit('marks an object without modifying it', () => {

    let myWeakSet = new WeakSet();
    let obj1 = {foo: 'bar'};
    let obj2 = {bar: 'baz'};

    // write two functions, processObj and isProcessed, to make the tests pass

    processObj(obj1);

    expect(isProcessed(obj1)).toBe(true);
    expect(isProcessed(obj2)).toBe(false);
  });
});
