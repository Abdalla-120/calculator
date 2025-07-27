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

let number1;
let operator;
let number2;

const operate = function(n1, operator, n2) {
    if (operator === "+") {
        add(n1, n2)
    } else if (operator === "-") {
        subtract(n1, n2)
    } else if (operator === "*") {
        multiply(n1, n2)
    } else if (operator === "/") {
        divide(n1, n2)
    }
}