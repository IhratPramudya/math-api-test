const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePrimeter, calculateRectangleArea, calculateTrianglePrimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator();

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePrimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });

    it('should return correct value based on rectangle primeter formula', () => {
      // Arrange

      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // Assert
      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not-geven 2 prameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given pramater not number', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectangleArea(true, {}));
      expect(() => figureCalculator.calculateRectangleArea(null, '2'));
      expect(() => figureCalculator.calculateRectangleArea([], {}));
    });

    it('should return correct value based on rectangle primeter formula', () => {
      // Arrange
      const width = 20;
      const length = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert

      expect(result).toEqual(40);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });
});

describe('A calculateTriangleArea', () => {
  it('should thro error when not-given three parameters', () => {
    const figureCalculator = new FigureCalculator();

    expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when not-given number', () => {
    const figureCalculator = new FigureCalculator();

    expect(() => figureCalculator.calculateTrianglePerimeter(null, {})).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(true, '1')).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter([], {})).toThrowError();
  });

  it('should should return correct value based on rectangle primeter formula', () => {
    // Arrange

    const sideA = 10;
    const sideB = 5;
    const base = 5;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

    // Assert
    expect(result).toEqual(20);
    expect(spyAdd).toHaveBeenCalledWith(sideA, 10);
  });
});

describe('A calculateTriangleArea', () => {
  it('should throw error when not-given two prameters', () => {
    const figureCalculator = new FigureCalculator();

    expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(1, 3, 4, 5)).toThrowError();
  });

  it('should throw error when given not number', () => {
    const figureCalculator = new FigureCalculator();

    expect(() => figureCalculator.calculateTriangleArea(null, {}));
    expect(() => figureCalculator.calculateTriangleArea(true, '2'));
    expect(() => figureCalculator.calculateTriangleArea([], {}));
  });

  it('should return correct value based Triangle', () => {
    // Arrange
    const base = 10;
    const height = 2;
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const spyDivide = jest.spyOn(MathBasic, 'divide');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateTriangleArea(base, height);

    // Assert

    expect(result).toEqual(10);
    expect(spyMultiply).toHaveBeenCalledWith(base, height);
    expect(spyDivide).toHaveBeenCalledWith(20, 2);
  });
});
