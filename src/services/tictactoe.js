"use strict";
class TicTocToe {
  constructor() {
    this.matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
    this.player = 1;
    this.gameStatus = "Process";
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
  yourTurn(i, j) {
    if (!this.matrix[i][j]) {
      this.matrix = this.matrix.map(row => [...row]);
      this.matrix[i][j] = this.player;
      this.player = this.player === 1 ? 2 : 1;
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
