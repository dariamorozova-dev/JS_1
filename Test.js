class Test {

    /**
     * Метод раскладывает фразу на слова и переписывает задом наперёд все слова,
     * в которых пять и более букв
     * @param {string} phrase любая фраза
     * @returns {string}
     */
    spinWords(phrase) {
        let words = phrase.split(' ');
        let newWords = [];
        let newWord = null;
        for (let wordId = 0; wordId < words.length; wordId++) {
            if (words[wordId].toString().length >= 5) {
                newWord = words[wordId].toString().split('').reverse().join('');
            } else {
                newWord = words[wordId].toString();
            }
            newWords.push(newWord);
        }
        let rezult = newWords.join(' ');
        return rezult;
    }

    /**
     * Метод считает сумму цифр в числе до тех пор, пока результатом не окажется цифра
     * Пример: 127 = 1 + 2 + 7 = 10 = 1 + 0 = 1;
     * 666 = 6 + 6 + 6 = 18 = 1 + 8 = 9.
     * @param {number} n целое число
     * @returns {number}
     */
    digital_root(n) {
        let numArr = n.toString().split('');
        let rezult = 0;


        while (true) {
            for (let i = 0; i < numArr.length; i++) {
                rezult += +numArr[i];
            }

            if (rezult <= 9) {
                return rezult;
            } else {
                numArr = rezult.toString().split('');
                rezult = 0;
            }
        }
    }

    /**
     * Метод принимает целое число и ресставляет цифры в нем в порядке убывания
     * @param {number} n целове число
     * @returns {number}
     */
    descendingOrder(n) {
        return +([...n.toString()].sort().reverse().join(''));
    }

}