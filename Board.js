class Board {
    constructor() {
        this.tableEl = document.querySelector('#boardEl');
        this.body = document.querySelector('body');
        this.cellsObj = {};
        this.config = new Config();
        // this.config = CONFIG;
        this.rezult = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.stepOF = 'X';
        // this.usedCellRow = '';
        // this.usedCellCol = '';
    }

    init() {
        this.renderMap();
        this.addEventListenersOnCell();
    }

    renderMap() {
        this.cleanBoard();
        for (let row = 0; row < this.config.getRowsCount(); row++) {
            const tr = document.createElement('tr');
            this.tableEl.appendChild(tr);
            for (let col = 0; col < this.config.getColsCount(); col++) {
                const td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    cleanBoard() {
        if (!this.tableEl.innerHTML == '') {
            this.tableEl.innerHTML = '';
            let body = document.querySelector('body');
            let div = document.querySelector('div');
            body.removeChild(div);
            let button = document.querySelector('button');
            body.removeChild(button);
            this.cleanRezult();
        }
    }

    cleanRezult() {
        for (let rowArr = 0; rowArr < this.config.getRowsCount(); rowArr++) {
            this.rezult[rowArr] = [];
            for (let colArr = 0; colArr < this.config.getColsCount(); colArr++) {
                let emptyStr = '';
                this.rezult[rowArr].push(emptyStr);
            }
        }
    }

    addEventListenersOnCell() {
         let tableCells = document.querySelectorAll('td');
        for (let i = 0; i < tableCells.length; i++) {
            tableCells[i].addEventListener('click', this.putSimbolInCell);
            this.putCellInCellsObj(tableCells[i]);
        }
    }

    putCellInCellsObj(cell) {
        this.cellsObj[`x${cell.dataset.row}_y${cell.dataset.col}`] = cell;
    }

    putSimbolInCell() {
        let x = event.target.dataset.row;
        let y = event.target.dataset.col;
        let currCell = board.cellsObj[`x${x}_y${y}`];
        if (currCell.innerText === '') {
            currCell.innerText = board.stepOF;
            board.putSimbolInRezultArr(x, y);
            board.checkVictory();
            board.changeSimbol();
        }
    }

    putSimbolInRezultArr(row, col) {
        board.rezult[row][col] = board.stepOF;
    }

    changeSimbol() {
        board.stepOF = board.stepOF === 'X' ? 'O' : 'X';
    }

    checkVictory() {
        if (board.rezult[0][0] === 'X' && board.rezult[0][1] === 'X' && board.rezult[0][2] === 'X' ||
            board.rezult[1][0] === 'X' && board.rezult[1][1] === 'X' && board.rezult[1][2] === 'X' ||
            board.rezult[2][0] === 'X' && board.rezult[2][1] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][0] === 'X' && board.rezult[1][0] === 'X' && board.rezult[2][0] === 'X' ||
            board.rezult[0][1] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][1] === 'X' ||
            board.rezult[0][2] === 'X' && board.rezult[1][2] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][0] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][2] === 'X' ||
            board.rezult[0][2] === 'X' && board.rezult[1][1] === 'X' && board.rezult[2][0] === 'X') {
                this.createWinMessage();
        } else if (board.rezult[0][0] === 'O' && board.rezult[0][1] === 'O' && board.rezult[0][2] === 'O' ||
            board.rezult[1][0] === 'O' && board.rezult[1][1] === 'O' && board.rezult[1][2] === 'O' ||
            board.rezult[2][0] === 'O' && board.rezult[2][1] === 'O' && board.rezult[2][2] === 'O' ||
            board.rezult[0][0] === 'O' && board.rezult[1][0] === 'O' && board.rezult[2][0] === 'O' ||
            board.rezult[0][1] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][1] === 'O' ||
            board.rezult[0][2] === 'O' && board.rezult[1][2] === 'O' && board.rezult[2][2] === 'O' ||
            board.rezult[0][0] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][2] === 'O' ||
            board.rezult[0][2] === 'O' && board.rezult[1][1] === 'O' && board.rezult[2][0] === 'O') {
                this.createWinMessage();
            } else if (!board.rezult.some((element) => {
                let emptyStr = '';
                return element.includes(emptyStr);
            })) {
                this.createLooseMesage();
            }
    }

    createWinMessage() {
        this.body.insertAdjacentHTML('afterbegin', `<div>GAME OVER! VICTORY OF "${board.stepOF}"!</div>`);
        this.createBtnReplay();
    }

    createBtnReplay() {
        this.tableEl.insertAdjacentHTML('afterend', '<button>Начать игру заново</button>');
        let button = document.querySelector('button');
        button.addEventListener('click', board.init.bind(board));
    }

    createLooseMesage() {
        this.body.insertAdjacentHTML('afterbegin', `<div>GAME OVER! NO ONE WON!</div>`);
        this.createBtnReplay();
    }
}