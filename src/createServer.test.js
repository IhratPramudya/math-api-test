const createServer = require('./createServer');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('shoulde respond with a status code of 200 and the payload value is addition result of a and b correcttly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtract result of a correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond code 200 and the payload value is multiply result is correctly', async () => {
      // Arrange
      const a = 10;
      const b = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(20);
      expect(spyMultiply).toHaveBeenCalledWith(10, 2);
    });
  });

  describe('when GET /divide', () => {
    it('should respond code 200 and the payload value is divide result is correctly', async () => {
      // Arrange
      const a = 8;
      const b = 2;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${2}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spyDivide).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/primeter', () => {
    it('should respond code 200 and the payload value is rectanglePrimeter result is correctly', async () => {
      // Arrange
      const length = 6;
      const width = 3;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/primeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(18);
      expect(spyMultiply).toHaveBeenCalledWith(2, length + width);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should respond code 200 and the payload value is rectangleArea is correctly', async () => {
      // Arrange
      const length = 6;
      const width = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(12);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /triangle/primeter', () => {
    it('should respond 200 and the payload value is rectangle is correctly', async () => {
      // Arrange
      const sideA = 3;
      const sideB = 3;
      const base = 3;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/primeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(9);
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB + base);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should respond code 200 and the payload value is triangleArea correctly', async () => {
      // Arrange
      const base = 4;
      const height = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(base * height, 2);
    });
  });
});
