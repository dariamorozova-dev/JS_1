'use strict';

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// let randomNumber = getRandomInt(0, 1000);

function stringSplit(userNumber) {
    userNumber = String(userNumber);
    let arrOfSimbols = [];
    arrOfSimbols = userNumber.split('');
    return arrOfSimbols;
}

function numberToObject() {
    let userNumber = Number(prompt('Введите число от 0 до 999:'));

    let userNumberObject = {
        units: 0,
        tens: 0,
        hundreds: 0,
    };

    for (; (Number.isInteger(userNumber) == false); ) {
        alert('Число должно быть целым!');
        userNumber = Number(prompt('Введите ЦЕЛОЕ число от 0 до 999:'));
    }

    // if (Number.isInteger(userNumber) == false) {
    //     alert('Число должно быть целым!');
    // }

    for (; (userNumber < 0 || userNumber > 999); ) {
        alert('Число должно быть от 0 до 999!');
        userNumber = Number(prompt('Введите число В ДИАПАЗОНЕ от 0 до 999:'));
    }

    if (userNumber > 0 && userNumber < 10) {
        let arr = stringSplit(userNumber);
        userNumberObject.units = arr[0];
    }
    if (userNumber >= 10 && userNumber <= 99) {
        let arr = stringSplit(userNumber);
        userNumberObject.units = arr[1];
        userNumberObject.tens = arr[0];
    }
    if (userNumber > 99 && userNumber < 1000) {
        let arr = stringSplit(userNumber);
        userNumberObject.units = arr[2];
        userNumberObject.tens = arr[1];
        userNumberObject.hundreds = arr[0];
    }

    alert('В числе "' + userNumber + '": ' + ' сотен - ' + userNumberObject.hundreds + ', десятков - ' + userNumberObject.tens + ', единиц - ' + userNumberObject.units);
    return userNumberObject;
}

console.log(numberToObject());