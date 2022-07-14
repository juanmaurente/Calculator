/**
 * Selection of elements from the DOM
 * Using data- attribute to better understanding
 * @link https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 *
 */

const displayPrevious = document.querySelector('calc__display--previous');
const displayCurrent = document.querySelector('calc__display--current');
const numberButtonsAll = document.querySelectorAll('[data-value]');
const clearBtn = document.getElementById('clear');
const signBtn = document.getElementById('sign');
const percentBtn = document.getElementById('percent');
const divideBtn = document.getElementById('divide');
const timesBtn = document.getElementById('times');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const deleteBtn = document.getElementById('delete');
const dotBtn = document.getElementById('dot');
const equalsBtn = document.getElementById('equals');

/**
 * Add event listeners to buttons
 *
 */
for (btn of numberButtonsAll) {
	document.addEventListener('click', () => {});

	console.log(btn.innerHTML);
}
