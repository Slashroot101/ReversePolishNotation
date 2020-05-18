const commander = require('commander');
const calculateEquation =

(() => {
	commander
		.version('0.0.1')
		.description('Reverse Polish Notation Calculator');
	
	commander
		.command("calculate <equation>")
		.action(equation => calculateEquation(equation));

	commander
		.parse(process.argv);
});