const { removeDuplicates } = require('./array');

describe('removeDuplicates', () => {
  test('should remove duplicate numbers from an array', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(removeDuplicates(input)).toEqual(output);
  });

  test('should handle an array with all unique values', () => {
    const input = [1, 2, 3];
    const output = [1, 2, 3];
    expect(removeDuplicates(input)).toEqual(output);
  });

  test('should return an empty array when input is empty', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test('should remove duplicates from an array of strings', () => {
    const input = ['apple', 'banana', 'apple', 'orange'];
    const output = ['apple', 'banana', 'orange'];
    expect(removeDuplicates(input)).toEqual(output);
  });
});