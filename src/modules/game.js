const Gameboard = require('./gameboard')

class Game {
  constructor(){
    this.player = new Gameboard('You')
    this.computer = new Gameboard('Computer')
    this.computer.populateBoard()
  }

}

module.exports = Game