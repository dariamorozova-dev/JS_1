'use strict';

let board = {
    tableEl: document.querySelector('#boardEl'),
    tableCells: [],
    config: [3, 3],
    stepOF: 'X',
    usedCellRow: '',
    usedCellCol: '',
    rezult: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

    init() {
        board.renderMap();
        board.addEventListenersOnCell();
    },

    cleanBoard() {
        if (!board.tableEl.innerHTML == '') {
            board.tableEl.innerHTML = '';
            let body = document.querySelector('body');
            let div = document.querySelector('div');
            body.removeChild(div);
            let button = document.querySelector('button');
            body.removeChild(button);
            board.cleanRezult();
        }
    },

    cleanRezult() {
        for (let rowArr = 0; rowArr < board.config[0]; rowArr++) {
            board.rezult[rowArr] = [];
            for (let colArr = 0; colArr < board.config[1]; colArr++) {
                let emptyStr = '';
                board.rezult[rowArr].push(emptyStr);
            }
        }
    },

    /**
     * метод генерирует игровое поле
     */
    renderMap() {
        board.cleanBoard();
        for (let row = 0; row < board.config[0]; row++) {
            const tr = document.createElement('tr');
            this.tableEl.appendChild(tr);
            for (let col = 0; col < board.config[1]; col++) {
                const td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    },

    /**
     * добавляем обработчик событий на каждую ячейку игрового поля
     */
    addEventListenersOnCell() {
        this.tableCells = document.querySelectorAll('td');
        for (let i = 0; i < this.tableCells.length; i++) {
            this.tableCells[i].addEventListener('click', this.putSimbolInCell)
        }
    },

    /**
     * метод записывает символ текущего хода в выбранную ячейку,
     * передает координаты ячейки методу внесения символа в массив с результатами
     * вызывает функцию смены символа для следующего шага
     */
    putSimbolInCell() {
        if (this.innerText === '') {
            this.innerText = board.stepOF;
            board.usedCellCol = this.dataset.col; 
            board.usedCellRow = this.dataset.row;
            board.putSimbolInRezultArr(board.usedCellRow, board.usedCellCol);
            board.changeSimbol();
        };
        board.checkVictory();
    },

    /**
     * метод меняет символ для следующего хода
     */
    changeSimbol() {
        board.stepOF = (board.stepOF === 'X') ? 'O' : 'X';
    },

    putSimbolInRezultArr(row, col) {
        board.rezult[row][col] = board.stepOF;
    },

    checkVictory() {
        if (board.rezult[0][0] === 'X' && board.rezult[0][1] === 'X' && board.rezult[0][2] === 'X' ||
            board.rezult[1][0] === 'X' && board.rezult[1][1] === 'X' && board.rezult[1][2] === 'X' ||
            board.rezult[2][0] === 'X' && board.rezult[2][1] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][0] === 'X' && board.rezult[1][0] === 'X' && board.rezult[2][0] === 'X' ||
            board.rezult[0][1] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][1] === 'X' ||
            board.rezult[0][2] === 'X' && board.rezult[1][2] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][0] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][2] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][0] === 'X') {
            // alert('выиграли крестики')
            let body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin','<div>GAME OVER! VICTORY OF "X"!</div>');
            board.createBtnReplay();
        } else if (board.rezult[0][0] === 'O' && board.rezult[0][1] === 'O' && board.rezult[0][2] === 'O' ||
        board.rezult[1][0] === 'O' && board.rezult[1][1] === 'O' && board.rezult[1][2] === 'O' ||
        board.rezult[2][0] === 'O' && board.rezult[2][1] === 'O' && board.rezult[2][2] === 'O' ||
        board.rezult[0][0] === 'O' && board.rezult[1][0] === 'O' && board.rezult[2][0] === 'O' ||
        board.rezult[0][1] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][1] === 'O' ||
        board.rezult[0][2] === 'O' && board.rezult[1][2] === 'O' && board.rezult[2][2] === 'O' ||
        board.rezult[0][0] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][2] === 'O' ||
        board.rezult[0][2] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][0] === 'O') {
            // alert('выиграли крестики')
            let body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin','<div>GAME OVER! VICTORY OF "O"!</div>');
            board.createBtnReplay();
        } 
    },

    createBtnReplay() {
        board.tableEl.insertAdjacentHTML('afterend', '<button>Начать игру заново</button>');
        let button = document.querySelector('button');
        button.addEventListener('click', board.init);
    }
};

board.init();