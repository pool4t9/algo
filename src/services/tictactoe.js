'use strict';
class TicTocToe {
    constructor() {
        this.matrix = new Array(3).fill(new Array(3).fill(0));
    }
    print() {
        for (let i = 0; i < 3; i++) {
            let temp = "";
            for (let j = 0; j < 3; j++) {
                temp += this.matrix[i][j] + " ";
            }
            console.log(temp);
        }
    }
    yourTurn(person, i, j) {
        if (!this.matrix[i][j]) {
            // console.log(person,i,j);
            this.matrix[i][j] = person;
            return true;
        }
        return false;
    }
    getBoard() {
        return this.matrix;
    }
}
TicTocToe.temp = new TicTocToe();
export default TicTocToe;