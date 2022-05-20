// hello.spec.js
// function to test
const sum = (a, b) => {
  return a + b;
};

describe('Function sum', () => {
  test('should return a correct sum', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should return an incorrect sum', () => {
    expect(sum(5, 2)).not.toBe(3);
  });
});
