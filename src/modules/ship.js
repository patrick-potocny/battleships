class Ship {
  constructor(length) {
    this.length = length;
    this.lives = length;
    this.isSunk = false;
  }

  hit() {
    if (!this.isSunk) {
      this.lives -= 1;
      this.isSunk = this.lives === 0 ? true : false;
      if (this.isSunk) return true
    }
  }
}

module.exports = Ship;
