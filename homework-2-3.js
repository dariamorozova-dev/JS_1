'use strict';

//задание 3

/**
 * Возвращает целое число из заданного промежутка значений
 * @param {number} min Минимальное значение
 * @param {number} max Максимальное значение
 * @returns {number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
let a = getRandomInt(-100, 101);
let b = getRandomInt(-100, 101);

if (a >= 0 && b >= 0) {
    let c = a - b;
    alert('Разность положительных чисел a и b равна: ' + c);
}
if (a < 0 && b < 0) {
    let d = a * b;
    alert('Произведение отрицательных чисел a и b равно: ' + d);
} 

if ((a >= 0 && b < 0) || (b >= 0 && a < 0)) {
    let e = a + b;
    alert('Сумма разных по знаку чисел a и b равна: ' + e);
}