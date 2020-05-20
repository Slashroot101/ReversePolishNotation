const calculateReversePolishNotation = require('../libs/calculateReversePolishNotation');
const colors = require('colors');

module.exports = (equation) => {
	try {
		const calculatedEquation = calculateReversePolishNotation(equation);
		calculatedEquation
			.arithmaticHistory
				.forEach(step => {
					console.log(colors.blue(step));
				});
		console.log(`Final Answer: `.green + colors.yellow(calculatedEquation.finalResult));
	} catch (err) {
		if(err.constructor == RangeError){
			console.log(colors.red(err.message));
		} else {
			console.log('Whoopsy :^)! A fatal error occured'.red);
		}
	}
}