const assert = require('assert');
const calculateReversePolishNotation = require('../src/libs/calculateReversePolishNotation');

describe('ReversePolishCalculator', () => {
	describe('Multiplication', () => {
		it('should return 12 when given 3 4 *', () => {
			const calculatedEquation = calculateReversePolishNotation('3 4 *');
			assert.strictEqual(calculatedEquation.finalResult, 12);
		});

		it('should return return -12 when given 3 -4 *', () => {
			const calculatedEquation = calculateReversePolishNotation('3 -4 *');
			assert.strictEqual(calculatedEquation.finalResult, -12);
		});

	});

	describe('Operands', () => {
		it('should return error when not enough operands', () => {
			try {
				const calculatedEquation = calculateReversePolishNotation('3 4');
			} catch (err) {
				assert.strictEqual(err.constructor, RangeError);
			}
		});
	});
});