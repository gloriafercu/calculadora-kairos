function application() {
	function sum(a, b) {
		return a + b;
	}
	function subtraction(a, b) {
		return a - b;
	}
	return {
		sum: sum,
		subtraction: subtraction
	}
}

if (typeof(module) != 'undefined') {
	module.exports = application;
}
