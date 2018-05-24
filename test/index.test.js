const application = require('../src/index.js');

describe('sum operations', function() {
	test('adds 1 + 0 to equal 1', function() {
		expect(application().sum(1, 0)).toBe(1);
	});
	test('adds 1 + 2 to equal 3', function() {
		expect(application().sum(1, 2)).toBe(3);
	});
	test('adds 1 + (-5) to equal -4', function() {
		expect(application().sum(1, -5)).toBe(-4);
	});
	test('adds 8 + (-5) to equal 3', function() {
		expect(application().sum(8, -5)).toBe(3);
	});
	test('adds -8 + -5) to equal 3', function() {
		expect(application().sum(-8, -5)).toBe(-13);
	});
	test('adds 1.23 + 2.5 to equal 3.73', function() {
		expect(application().sum(1.2, 2.5)).toBe(3.70);
	});
});

	describe('subtraction operations', function() {
		test('adds 1 - 0 to equal 1', function() {
			expect(application().subtraction(1, 0)).toBe(1);
		});
		test('adds 1 - 2 to equal -1', function() {
			expect(application().subtraction(1, 2)).toBe(-1);
		});
		test('adds 1 - (-5) to equal 6', function() {
			expect(application().subtraction(1, -5)).toBe(6);
		});
		test('adds -8 - (-5) to equal 3', function() {
			expect(application().subtraction(-8, -5)).toBe(-3);
		});
});
