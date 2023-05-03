const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, substract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});

describe('A add function', () => {
  it('should throw error when not given 2 prameters', () => {
    expect(() => MathBasic.add()).toThrowError();
    expect(() => MathBasic.add(1)).toThrowError();
    expect(() => MathBasic.add(1, 3, 5)).toThrowError();
  });

  it('should throw error when given non-number parameter', () => {
    expect(() => MathBasic.add('1', '2')).toThrowError();
    expect(() => MathBasic.add(true, {})).toThrowError();
    expect(() => MathBasic.add(null, false)).toThrowError();
  });

  it('should return a + b when given two number parameters', () => {
    expect(MathBasic.add(2, 2)).toEqual(4);
    expect(MathBasic.add(16, 2)).toEqual(18);
    expect(MathBasic.add(5, 3)).toEqual(8);
  });
});

describe('A subtract function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.subtract()).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
  });

  it('should throw error when given non-number', () => {
    expect(() => MathBasic.subtract(true, false)).toThrowError();
    expect(() => MathBasic.subtract('Hello', '1')).toThrowError();
    expect(() => MathBasic.subtract('1', '2')).toThrowError();
  });

  it('should return a - b when given two number parameter', () => {
    expect(MathBasic.subtract(4, 2)).toEqual(2);
    expect(MathBasic.subtract(10, 5)).toEqual(5);
    expect(MathBasic.subtract(20, 10)).toEqual(10);
  });
});

describe('A multiply function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.multiply()).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number', () => {
    expect(() => MathBasic.multiply(true, false)).toThrowError();
    expect(() => MathBasic.multiply('1', '2')).toThrowError();
    expect(() => MathBasic.multiply('Hello', 'World')).toThrowError();
  });

  it('should return a * b when given two parameter', () => {
    expect(MathBasic.multiply(4, 2)).toEqual(8);
    expect(MathBasic.multiply(10, 2)).toEqual(20);
    expect(MathBasic.multiply(10, 3)).toEqual(30);
  });
});

describe('A divide function', () => {
  it('should throw error when not given two parameter', () => {
    expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
    expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
    expect(() => MathBasic.divide()).toThrowError();
  });

  it('should throw error when given not-number parameter', () => {
    expect(() => MathBasic.divide(true, false)).toThrowError();
    expect(() => MathBasic.divide('1', '2')).toThrowError();
    expect(() => MathBasic.divide('Hello', 'World')).toThrowError();
  });

  it('should return a / b when given two parameter', () => {
    expect(MathBasic.divide(10, 2)).toEqual(5);
    expect(MathBasic.divide(20, 10)).toEqual(2);
    expect(MathBasic.divide(6, 3)).toEqual(2);
  });
});
