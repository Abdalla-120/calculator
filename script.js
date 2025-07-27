const add = function(n1, n2) {
    return n1 + n2;
}

const subtract = function(n1, n2) {
    return n1 - n2;
}

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1 / n2;
}

const calculate = function(){
    const firstIndex = display.textContent.indexOf(" ");
    const secondIndex = display.textContent.indexOf(" ", firstIndex + 1);
    const firstNumber = Number(display.textContent.slice(0, firstIndex));
    const secondNumber = Number(display.textContent.slice(secondIndex + 1));
    console.log(firstNumber)
    console.log(secondNumber)

    display.textContent = operate(firstNumber, currentOperator, secondNumber);
    console.log(display.textContent)
};

let number1;
let operator;
let number2;

const operate = function(n1, operator, n2) {
    let result;
    if (operator === "+") {
        result = add(n1, n2)
    } else if (operator === "-") {
        result = subtract(n1, n2)
    } else if (operator === "*") {
        result = multiply(n1, n2)
    } else if (operator === "/") {
        result = divide(n1, n2)
    }
    return result;
}

const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent
    });
});

const chars = ["+", "-", "*", "/"]

let currentOperator;
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (chars.some(char => display.textContent.includes(char))){
            calculate();

        }
        display.textContent += " " + operator.textContent + " ";
        currentOperator = operator.textContent;
    })
})

equal.addEventListener("click", () => calculate());