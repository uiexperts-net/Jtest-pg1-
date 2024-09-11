const { mergeObjects } = require('./compare');

describe('mergeObjects', () => {
  test('should merge two objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const output = { a: 1, b: 2, c: 3, d: 4 };
    expect(mergeObjects(obj1, obj2)).toEqual(output);
  });

  test('should override values when keys are the same', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const output = { a: 1, b: 3, c: 4 };
    expect(mergeObjects(obj1, obj2)).toEqual(output);
  });

  test('should return an empty object when both objects are empty', () => {
    expect(mergeObjects({}, {})).toEqual({});
  });
});