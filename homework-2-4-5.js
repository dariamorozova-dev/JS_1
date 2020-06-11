'use strict';

//задание 4

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let a = Number(prompt('Введите первое слагаемое: '));
let b = Number(prompt('Введите второе слагаемое: '));
alert('Сумма чисел равна: ' + sum(a, b));

a = Number(prompt('Введите уменьшаемое число: '));
b = Number(prompt('Введите вычитаемое число: '));
alert('Разность чисел равна: ' + diff(a, b));

a = Number(prompt('Введите первый множитель: '));
b = Number(prompt('Введите второй множитель: '));
alert('Произведение чисел равно: ' + multiply(a, b));

a = Number(prompt('Введите делимое: '));
b = Number(prompt('Введите делитель: '));
alert('Частное чисел равно: ' + div(a, b));

//задание 5

function mathOperation (arg1, arg2, operation) {
    let d = 0;
    switch (operation) {
        case 'сложение':
        case 'сложить':
        case '+':
            d = sum(a,b);
            break;
        case 'вычитание':
        case 'вычесть':
        case '-':
            d = diff(a, b);
            break; 
        case 'делить':
        case 'поделить':
        case 'разделить':
        case '/':
            d = div(a, b);
            break;
        case 'умножить':
        case 'перемножить':
        case 'умножение':
        case '*':
            d = multiply(a, b);
            break;
        default:
            throw new Error ('Операцию ' + с + 'выполнить невозможно');
    }
    return d;
}

let arg1 = Number(prompt('Введите первое число: '));
let arg2 = Number(prompt('Введите второе число: '));
let operation = prompt('Какую операцию вы хотите совершить: ');

alert('Результат операции "' + operation + '" равен: ' + mathOperation(arg1, arg2, operation));