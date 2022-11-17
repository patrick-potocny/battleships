const Gameboard = require("./gameboard");

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.recievedHits = [];
  }

  recieveRandomHit() {
    let validCoords = false;
    let hitCoords = [];
    while (!validCoords) {
      const x = Math.floor(Math.random() * 11);
      const y = Math.floor(Math.random() * 11);
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
    
    this.recievedHits.push(hitCoords)
    return this.gameboard.recieveHit(hitCoords)
  }
}

module.exports = Player;
