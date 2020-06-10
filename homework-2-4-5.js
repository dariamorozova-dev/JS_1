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
    switch (c) {
        case 'сложение':
            d = sum(a,b);
            break;
        case 'сложить':
            d = sum(a,b);
            break;
        case 'вычитание':
            d = diff(a, b);
            break;
        case 'вычесть':
            d = diff(a, b);
            break;
        case 'делить':
            d = div(a, b);
            break;
        case 'поделить':
            d = div(a, b);
            break;
        case 'разделить':
            d = div(a, b);
            break;
        case 'умножить':
            d = multiply(a, b);
            break;
        case 'перемножить':
            d = multiply(a, b);
            break;
        case 'умножение':
            d = multiply(a, b);
            break;
    }
    return d;
}

a = Number(prompt('Введите первое число: '));
b = Number(prompt('Введите второе число: '));
let c = prompt('Какую операцию вы хотите совершить: ');

alert('Результат операции "' + c + '" равен: ' + mathOperation(a, b, c));