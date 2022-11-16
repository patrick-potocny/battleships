// Gamboard class
// Properties:
// 2D 10x10 array of Ship instances and empty fields and misses represented by false
//, all fields are empty at first

// Methods:
// recieve attack(position): check if  ship is there and hit it else record miss in misses array
// add ship to board by populating cells with its instance
// after each hit  check of all ships have been sunk

// Notes:
// Ship types : Carrier:5 Battleship:4 Destroyer:3(2) Patrol Boat:2(2)
const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.liveShips = 0;
    // Creating empty board represented by 2D array
    this.board = new Array(10);
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(10);
    }
  }

  placeShip(length, cooridnatesList) {
    const ship = new Ship(length);
    for (const cooridnates of cooridnatesList) {
      this.board[cooridnates[0]][cooridnates[1]] = ship;
    }
    this.liveShips += 1
  }

  recieveAttack(cooridnates) {
    const cell = this.board[cooridnates[0]][cooridnates[1]];
    if (cell === undefined) {
      this.board[cooridnates[0]][cooridnates[1]] = false;
      return 'miss'
    } else return this.checkLiveShips(cell.hit())
  }

  checkLiveShips(hitFunc){
    if (hitFunc) {
      this.liveShips -= 1
      if (this.liveShips === 0) return 'gameEnd'
    }
    return 'hit'
  }
}



module.exports = Gameboard;
