class Snake {
    constructor() {
        this.possibleDirections = ['down', 'up', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    init(board) {
        this.board = board;
    }

    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        if (this.board.isNextStepToWall(this.body[0])) {
            switch (this.direction) {
                case 'down':
                    newHeadCoords.y = 0;
                    break;
                case 'up':
                    newHeadCoords.y = 22;
                    break;
                case 'left':
                    newHeadCoords.x = 22;
                    break;
                case 'right':
                    newHeadCoords.x = 0;
                    break;
            }
        }
        switch (this.direction) {
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Это не направление. Нельзя идти в сторону: ' + newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    isPassedOppositeDirection(newDirection) {
        if (this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if (this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if (this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if (this.direction == 'right' && newDirection == 'left') {
            return true;
        }
        return false;
    }

    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}