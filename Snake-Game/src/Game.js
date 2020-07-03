class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById('message');
        this.messageCountEl = document.getElementById('messageCount');
        this.pointsCount = 0;
        this.messageCountEl.innerText = (`Ваш счёт: ${this.pointsCount}`);
    }

    init(settings, status, board, snake, menu, food) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
    }

    run() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this));
    }

    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }

    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }

    doTick() {
        this.snake.performStep();
        if (this.isGameLost()) {
            return;
        }
        if (this.isGameWon()) {
            return;
        }
        if (this.board.isHeadOnFood()) {
            // увеличить счетчик баллов
            this.addPoints();
            this.snake.increaseBody();
            this.food.setNewFood();
        }
        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
    }

    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection('up');
                break;
            case "ArrowDown":
                this.snake.changeDirection('down');
                break;
            case "ArrowLeft":
                this.snake.changeDirection('left');
                break;
            case "ArrowRight":
                this.snake.changeDirection('right');
                break;
        }
    }

    isGameLost() {
        // if (this.board.isNextStepToWall(this.snake.body[0])) {
        //     clearInterval(this.tickIdentifier);
        //     this.setMessage('Вы проиграли');
        //     return true;
        // }
        if (this.board.isHeadOnSnake(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы проиграли');
            return true;
        }
        return false;
    }

    setMessage(text) {
        this.messageEl.innerText = text;
    }

    isGameWon() {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы выиграли');
            return true;
        }
        return false;
    }

    addPoints() {
        this.pointsCount++; 
        this.messageCountEl.innerText = (`Ваш счёт: ${this.pointsCount}`);       
    }
}