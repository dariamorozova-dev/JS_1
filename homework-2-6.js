'use strict';

//задание 6

let money = parseInt(prompt('Какую сумму Вы хотите положить на счёт?'));
let string = String(money);
let stringLenght = string.length;
let lastChar = string.charAt(stringLenght - 1);
// alert(lastChar);
function ruble(a) {
    let rub = '';
    let beforeLastChar = string.charAt(stringLenght - 2);
    if (beforeLastChar == '1') {
        rub = 'рублей';
        return rub;
    }
    switch(a) {
        case '1':
            rub = 'рубль';
            break;
        case '2':
        case '3':
        case '4':
            rub = 'рубля';
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            rub = 'рублей';
            break;
    }
    return rub;
}

let rub = ruble(lastChar);
alert('Вы положили на счет ' + money + ' ' + rub);