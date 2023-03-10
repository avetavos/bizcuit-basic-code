import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should throw an error when the input is invalid', () => {
    expect(() => sum('invalid', 3)).toThrow('Invalid input');
  });
});
