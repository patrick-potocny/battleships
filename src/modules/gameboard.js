const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.liveShips = 0;
    // Creating empty board represented by 2D array
    this.board = null
    this.createEmptyBoard()
  }

  createEmptyBoard(){
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
    this.liveShips += 1;
  }

  recieveAttack(cooridnates) {
    const cell = this.board[cooridnates[0]][cooridnates[1]];
    if (cell === undefined) {
      this.board[cooridnates[0]][cooridnates[1]] = false;
      return "miss";
    } else return this.checkLiveShips(cell.hit());
  }

  checkLiveShips(hitFunc) {
    if (hitFunc) {
      this.liveShips -= 1;
      if (this.liveShips === 0) return "gameEnd";
    }
    return "hit";
  }

  populateBoard() {
    this.createEmptyBoard()
    const shipLengths = [5, 4, 3, 3, 2, 2]
    let usedCoords = [];
    for (const shipLength of shipLengths) {
      const coords = this.coordsGenerator(shipLength, usedCoords);
      this.placeShip(shipLength, coords);
      usedCoords = usedCoords.concat(coords);
    }
  }

  coordsGenerator(shipLen, usedCoords) {
    let coordsValid = false;
    let coords = []
    while (!coordsValid) {
      const orientation = ["h", "v"][Math.floor(Math.random() * 2)];
      coords = [];

      if (orientation === "h") {
        const x = Math.floor(Math.random() * 11);
        const y = Math.floor(Math.random() * (11-shipLen));
        for (let i = 0; i < shipLen; i++) coords.push([x, y + i]);
      } else if (orientation === "v") {
        const x = Math.floor(Math.random() * (11-shipLen));
        const y = Math.floor(Math.random() * 11);
        for (let i = 0; i < shipLen; i++) coords.push([x + i, y]);
      }

      coordsValid = true;
      for (let coord of coords) {
        coord = coord.toString();
        for (let usedCoord of usedCoords) {
          usedCoord = usedCoord.toString();
          if (coord === usedCoord) {
            coordsValid = false;
            break; 
          }
        }
      }
    }

    return coords
  }
}

// coordsGen(shipLen, usedcoords)
// coordsValid = false
// while not coordsvalid
// orientation = ['h', 'v'][Math.floor(Math.random() * 2)]
// coords = []

// if orientation === h
// x = Math.floor(Math.random() * 11);
// y = Math.floor(Math.random() * 11-shipLen);
//for (let i = 0; i < shiplen; i++)
//coords.push([x, y+i])

// if orientstion === v
// x = Math.floor(Math.random() * 11-shiplen);
// y = Math.floor(Math.random() * 11);
//for (let i = 0; i < shiplen; i++)
//coords.push([x+1, y])

// coordsValid = true
// for (let coord of coords) {
//   coord = coord.toString()
//   for (let usedCoord of usedCoords) {
//     usedCoord = usedCoord.toString()
//     if (coord === usedCoord) {
//      coordsValid = false
//      break
// }
//   }
// }

module.exports = Gameboard;
