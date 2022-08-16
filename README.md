
# JavaScript Calculator

## Design
![image](https://user-images.githubusercontent.com/26740359/184817141-9e7ab67a-51b3-4253-8171-80c8e225e65e.png)

## About the code
The process I followed for this project was first to design and build the calculator, the different elements I wanted to display and to have an idea of their functionality. A simple calculator may seem simple and intuitive, but as a developer I decided to incorporate and "imitate" its behaviour. Once the "visual" part was done I focused on the functionality. 
I basically followed the next steps:
First I selected and stored in different variables the elements from the dom. Then I introduced the event listeners (for numbers first) with some logic so that I can determinate which operand I am currently working with and decide where to display it. Then the operators came to play and finally the clear button. Some of the functions I used (in plain english) where:
- addNumberToOperand() responsible to handle each number the user has clicked.
- displayCurrentOperand() responsible to display the current Operand in its corresponding container.
- displayPreviousOperand() responsible to display the previous Operand in its corresponding container improving the UX.
- executeOperation() responsible to handle the operation between two operands.
- clear()

# About the Project
## Outline
- Create a README.md on your Calculator repository that includes a picture of the design you will be reproducing
- Using HTML + SCSS, recreate the design that you chose
- In the README.md add a breakdown of your project for the JavaScript part of the code. We encourage you to be as granular as possible. const scope3 = () => { const scope3Var = "123"; }
## MVP
- Create a calculator to be rendered to the html page
- it should have number keys from 0 to 9const scope3 = () => { const scope3Var = "123"; }
- It should have operator keys (+, -, /, *, =)
- It should have a display rendering the current calculation in a box at the top
- It should also have a “.” key

## Sample Image


## JS code Explanation
- We define variables for each button; also set1, set2 (set of numbers)

- The next step will be to identify each element and set event listeners to store the value of the keys selected by the user.
  e.g. const equalBottom = document.querySelector(#Bottom)
        addEventListener('click', (e)).innerHTML and pass to handle operations


- function handleElement(e) will check if its a number, operator or invalid character
- function handleNumber() will store the value of the number selected into a set (Set1) of numbers and return this set of values
- function handleOperator() stores the operator to be performed, completes set1 and gives place to set2 (possibility to display all selected up to this point)
- function handleEqual() its execution depends on the operator that has been selected (check first if selected) and returns the result to be displayed in the result.
- function handleClear() to delete values
