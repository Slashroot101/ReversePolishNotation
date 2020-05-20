const commander = require('commander');
const calculateEquation = require('./actions/reversePolishAction');

commander
	.version('0.0.1')
	.description('Reverse Polish Notation Calculator');

commander
	.command("calculate <equation>")
	.action(equation => calculateEquation(equation));

commander
	.parse(process.argv);
