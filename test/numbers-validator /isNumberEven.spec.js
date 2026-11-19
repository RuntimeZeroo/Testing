const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('isNumberEven', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it('should return false if number is odd', () => {
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw if the argument is not a number', () => {
      expect(() => validator.isNumberEven('4')).to.throw(
        '[4] is not of type "Number" it is of type "string"',
      );
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return only even numbers', () => {
      expect(validator.getEvenNumbersFromArray([1, 2, 3, 4])).to.deep.equal([2, 4]);
    });

    it('should throw if the array contains a non-number', () => {
      expect(() => validator.getEvenNumbersFromArray([1, '2'])).to.throw(
        'is not an array of "Numbers"',
      );
    });

    it('should throw if the argument is not an array', () => {
      expect(() => validator.getEvenNumbersFromArray('abc')).to.throw(
        '[abc] is not an array of "Numbers"',
      );
    });
  });

  describe('isAllNumbers', () => {
    it('should return true if all elements are numbers', () => {
      expect(validator.isAllNumbers([1, 2, 3])).to.be.equal(true);
    });

    it('should return false if some element is not a number', () => {
      expect(validator.isAllNumbers([1, 'a', 3])).to.be.equal(false);
    });

    it('should throw if the argument is not an array', () => {
      expect(() => validator.isAllNumbers('abc')).to.throw('[abc] is not an array');
    });
  });

  describe('isInteger', () => {
    it('should return true for an integer', () => {
      expect(validator.isInteger(5)).to.be.equal(true);
    });

    it('should return false for a non-integer', () => {
      expect(validator.isInteger(5.5)).to.be.equal(false);
    });

    it('should throw if the argument is not a number', () => {
      expect(() => validator.isInteger('5')).to.throw('[5] is not a number');
    });
  });
});
