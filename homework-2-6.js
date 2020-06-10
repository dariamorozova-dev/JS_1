'use strict';

//задание 6

let money = parseInt(prompt('Какую сумму Вы хотите положить на счёт?'));
let string = String(money);
let stringLenght = string.length;
let lastChar = string.charAt(stringLenght - 1);
// alert(lastChar);
function ruble(a) {
    let rub = '';
    switch(a) {
        case '1':
            rub = 'рубль';
            break;
        case '2':
            rub = 'рубля';
            break;
        case '3':
            rub = 'рубля';
        case '4':
            rub = 'рубля';
            break;
        case '5':
            rub = 'рублей';
            break;
        case '6':
            rub = 'рублей';
            break;
        case '7':
            rub = 'рублей';
            break;
        case '8':
            rub = 'рублей';
            break;
        case '9':
            rub = 'рублей';
            break;
        case '0':
            rub = 'рублей';
            break;
    }
    return rub;
}

let rub = ruble(lastChar);
alert('Вы положили на счет ' + money + ' ' + rub);