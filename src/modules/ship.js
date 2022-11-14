class Ship {
  constructor(length) {
    this.length = length
    this.lives = length
    this.isSunk = false
  }

  hit() {
    this.lives = this.lives - 1
    this.isSunk = this.lives === 0 ? true : false
  }
 }

module.exports = Ship;