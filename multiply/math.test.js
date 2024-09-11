const { multiply, divide } = require('./math');

describe('Math functions', () => {
  
  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should return the product of a positive and a negative number', () => {
      expect(multiply(5, -2)).toBe(-10);
    });

    test('should return zero if one of the numbers is zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(7, 0)).toBe(0);
    });

    test('should return the correct product of two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });
    describe('divide', () => {
    test('should return the quotient of two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should return a negative result when dividing a positive number by a negative one', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should return the correct quotient of two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });
  });
});