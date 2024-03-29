/**
 * Selection of elements from the DOM
 * Using data- attribute to better understanding
 * @link https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 *
 */

const displayPrevious = document.querySelector('calc__display--previous');
const displayCurrent = document.querySelector('calc__display--current');
const numberButtonsAll = document.querySelectorAll('[data-value]');
const operatorButtonsAll = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById('clear');
const signBtn = document.getElementById('sign');
const percentBtn = document.getElementById('percent');
const deleteBtn = document.getElementById('delete');
const dotBtn = document.getElementById('dot');
const equalsBtn = document.getElementById('equals');

let operandA = '';
let operandB = '';
let previousOperation = '';
let operator = '';
let result;

let operationRunning = false;
let decimalNumA = false;
let decimalNumB = false;

numberButtonsAll.forEach((btn) => {
	btn.addEventListener('click', () => {
		addNumberToOperand(btn.innerHTML);
		displayCurrentOperand();
	});
});

operatorButtonsAll.forEach((btn) => {
	btn.addEventListener('click', () => {
		//First check if a previous operation is active
		if (operationRunning == false) {
			operandB = '';
			operator = btn.innerHTML;
			operationRunning = true;
			displayCurrentOperand();
			displayPreviousOperand();
		} else {
			executeOperation();
			operandB = '';
			operator = btn.innerHTML;
			operationRunning = true;
			displayCurrentOperand();
			displayPreviousOperand();
		}
	});
});

/**
 * Add event Listener to Dot button with following checks.
 * Operation Running? NO -> DecimalNumA = true ? don't add dot : add dot to operandA.
 YES -> DecimalNumB = true ? don't add dot : add dot to operandB.
 */
dotBtn.addEventListener('click', () => {
	if (!operationRunning) {
		if (decimalNumA) {
			return;
		} else {
			decimalNumA = true;
			return (operandA += '.');
		}
	} else {
		if (decimalNumB) {
			return;
		} else {
			decimalNumB = true;
			return (operandB += '.');
		}
	}
});

equalsBtn.addEventListener('click', () => {
	executeOperation();
});

signBtn.addEventListener('click', () => {
	alert('Oops, not this time');
});

percentBtn.addEventListener('click', () => {
	alert('Oops, not this time');
});

clearBtn.addEventListener('click', () => {
	clear();
});

/**
 * This function will handle the operands. First checks which operand I am adding, then checks if the number starts with zero.
 * @param {str} will be a number of type string
 * @returns
 */
function addNumberToOperand(str) {
	//check if I should work on operandA or B
	if (operationRunning) {
		//If I'm on B and user press 0
		if (operandB == '' && str == '0') {
			// Check if starts with 0 or non previous value
			return operandB == '0';
		} else if (operandB.startsWith('0') && str != '0') {
			return (operandB = operandA.slice(1) + str);
		}
		return (operandB += str);
	}
	if (operandA == '' && str == '0') {
		// Check if starts with 0 or non previous value
		return operandA == '0';
	} else if (operandA.startsWith('0') && str != '0') {
		return (operandA = operandA.slice(1) + str);
	}
	return (operandA += str);
}

function displayCurrentOperand(str) {
	if (operationRunning) {
		return (document.getElementById('dispBg').innerHTML = operandB);
	} else if (operandA != '') {
		return (document.getElementById('dispBg').innerHTML = operandA);
	}
	return (document.getElementById('dispBg').innerHTML = '0');
}

function displayPreviousOperand() {
	if (operationRunning) {
		return (document.getElementById(
			'dispSm',
		).innerHTML = `${operandA} ${operator}`);
	}
	return (document.getElementById('dispSm').innerHTML = '');
}

function executeOperation() {
	switch (operator) {
		case '+': {
			result = parseFloat(operandA) + parseFloat(operandB);
			break;
		}
		case '-': {
			result = parseFloat(operandA) - parseFloat(operandB);
			break;
		}
		case '÷': {
			result = parseFloat(operandA) / parseFloat(operandB);
			break;
		}
		case 'x': {
			result = parseFloat(operandA) * parseFloat(operandB);
			break;
		}
	}
	operandA = result;
	result = undefined;
	operandB = '';
	operator = '';
	operationRunning = false;
	displayCurrentOperand(operandA);
	displayPreviousOperand();
}

function clear() {
	operandA = '';
	operandB = '';
	operator = '';
	operationRunning = false;
	displayCurrentOperand();
	displayPreviousOperand();
}
