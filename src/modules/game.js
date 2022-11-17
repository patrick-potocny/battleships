const Player = require('./player')

class Game {
  constructor(){
    this.player = new Player('You')
    this.computer = new Player('Computer')
    this.computer.gameboard.populateBoard()
    console.log(this.computer.gameboard.board);
  }

  // Wait for user to place ships and t
  // then to click START btn(check if all ships are placed check board.liveships)


  // liaten to game end string when hiting 
  // Will need empty board to show to user as computers board without ships
}

module.exports = Game