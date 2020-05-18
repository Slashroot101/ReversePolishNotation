module.exports = (equation) => {
	const parsedEquation = equation.split(' ');
	let s = [];
	let tokenParseHistory = [];
	for (var i in parsedEquation) {
		let t=e[i], n=+t;
		if(!t) continue;
		if(n === t) {
			s.push(n);
		} else {
			if ('+-*/^'.indexOf(t) === -1) {
				throw new RangeError('Invalid operand!');
			}
			if(s.length < 2){
				throw new RangeError('Not enough operands!');
			}
			const secondOperand = s.pop(), firstOperand = s.pop();
			switch (t) {
				case '+': s.push(firstOperand+secondOperand); break
				case '-': s.push(firstOperand-secondOperand); break
				case '*': s.push(firstOperand*secondOperand); break
				case '/': s.push(firstOperand/secondOperand); break
				case '^': s.push(Math.pow(firstOperand,secondOperand))
			}
		}
		tokenParseHistory.push(`${t}:${s}`);
	}
	if(s.length > 1) {
		throw new RangeError('Note enough operands');
	}
};