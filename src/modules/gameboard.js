const Ship = require("./ship");

class Gameboard {
  constructor(name) {
    this.name = name;
    this.liveShips = 0;
    this.recievedHits = [];
    this.board = null;
    this.createEmptyBoard();
  }

  createEmptyBoard() {
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
    this.liveShips += 1;
  }

  recieveHit(cooridnates) {
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
    this.createEmptyBoard();
    const shipLengths = [5, 4, 3, 3, 2, 2];
    let usedCoords = [];
    for (const shipLength of shipLengths) {
      const coords = this.coordsGenerator(shipLength, usedCoords);
      this.placeShip(shipLength, coords);
      usedCoords = usedCoords.concat(coords);
    }
  }

  coordsGenerator(shipLen, usedCoords) {
    let coordsValid = false;
    let coords = [];
    while (!coordsValid) {
      const orientation = ["h", "v"][Math.floor(Math.random() * 2)];
      coords = [];

      if (orientation === "h") {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * (10 - shipLen));
        for (let i = 0; i < shipLen; i++) coords.push([x, y + i]);
      } else if (orientation === "v") {
        const x = Math.floor(Math.random() * (10 - shipLen));
        const y = Math.floor(Math.random() * 10);
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

    return coords;
  }

  recieveRandomHit() {
    let validCoords = false;
    let hitCoords = [];
    while (!validCoords) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      hitCoords = [x, y];

      validCoords = true;
      for (let recievedHitCoords of this.recievedHits) {
        recievedHitCoords = recievedHitCoords.toString();
        if (recievedHitCoords === hitCoords.toString()) {
          validCoords = false;
          break;
        }
      }
    }

    this.recievedHits.push(hitCoords);
    return this.recieveHit(hitCoords);
  }
}

module.exports = Gameboard;
